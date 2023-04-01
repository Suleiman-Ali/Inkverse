import multer from 'multer';
import createError from '../utils/create-error';

const storage = multer.memoryStorage();
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image')) return cb(null, true);
  cb(createError('InvalidFileTypeError', 'File type is invalid'), false);
};
export default multer({ storage, fileFilter });
