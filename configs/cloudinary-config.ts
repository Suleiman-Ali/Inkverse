import { v2 as cloudinary } from 'cloudinary';

const { config } = cloudinary;
const cloud_name = process.env.CLOUD_NAME as string;
const api_key = process.env.CLOUD_API_KEY as string;
const api_secret = process.env.CLOUD_SECRET as string;
export default config({
  cloud_name,
  api_key,
  api_secret,
});
