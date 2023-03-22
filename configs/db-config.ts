import mongoose from 'mongoose';

export default async function dbConnect() {
  return mongoose
    .connect(process.env.DB_URI as string)
    .then(() => console.log('DB connection was successful'))
    .catch(() => console.log('DB connection failed'));
}
