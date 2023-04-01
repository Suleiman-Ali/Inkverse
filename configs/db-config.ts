import { connect } from 'mongoose';

const log = (message: string) => () => console.log(message);
const uri = process.env.DB_URI as string;
export default async function dbConnect() {
  return connect(uri)
    .then(log('DB connection successful'))
    .catch(log('DB connection failed'));
}
