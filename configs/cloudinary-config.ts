import cloudinary from 'cloudinary';

const cloud_name = process.env.CLOUD_NAME as string;
const api_key = process.env.CLOUD_API_KEY as string;
const api_secret = process.env.CLOUD_SECRET as string;
const v2 = cloudinary.v2;
v2.config({
  cloud_name,
  api_key,
  api_secret,
});
export default v2.uploader;
