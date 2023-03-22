import multer from 'multer';

const storage = multer.memoryStorage();
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image')) cb(null, true);
  else cb(new Error('Invalid file type'), false);
};
export default multer({ storage, fileFilter });
