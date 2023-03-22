import dbConnect from '../configs/db-config';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function dbConnectMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  await dbConnect();
  next();
}
