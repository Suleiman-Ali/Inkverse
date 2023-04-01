import sharp from 'sharp';
import cloudinary from '../configs/cloudinary-config';
import { createReadStream } from 'streamifier';

function constructImageName(originalname: string, folder: string) {
  const name = `${folder}-${originalname.split('.')[0].trim().toLowerCase()}`;
  return name;
}

async function resizeImage(
  buffer: string,
  format: 'png' | 'jpeg',
  size: [number, number]
) {
  const image = await sharp(buffer)
    .resize(...size)
    .toFormat(format)
    .toBuffer();
  return image;
}

export async function uploadImage(
  file: any,
  folder: string,
  format: 'png' | 'jpeg',
  size: [number, number]
) {
  const name = constructImageName(file.originalname, folder);
  const buffer = await resizeImage(file.buffer, format, size);
  return new Promise<{ url: string }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: name,
        use_asset_folder_as_public_id_prefix: true,
        unique_filename: false,
        overwrite: true,
      },
      (err: any, res: any) => (err ? reject(err) : resolve(res.url))
    );
    createReadStream(buffer).pipe(uploadStream);
  });
}

export async function uploadImages(
  files: any[],
  folder: string,
  format: 'png' | 'jpeg',
  size: [number, number]
) {
  const images = files.map((file) => uploadImage(file, folder, format, size));
  return await Promise.all(images);
}
