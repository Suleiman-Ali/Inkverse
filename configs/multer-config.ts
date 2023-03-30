import multer from 'multer';

const storage = multer.memoryStorage();
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image')) return cb(null, true);
  const error = new Error();
  error.name = 'InvalidFileTypeError';
  error.message = 'File type is invalid';
  cb(error, false);
};
export default multer({ storage, fileFilter });
