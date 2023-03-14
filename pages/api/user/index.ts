import dbConnect from '../../../utils/db-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { readUsers } from '../../../controllers/user-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'GET') return readUsers(req, res);
}
