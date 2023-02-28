import dbConnect from '../../../utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteUser,
  readUser,
  updateUser,
} from '../../../controllers/user-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'GET') return readUser(req, res);
  if (req.method === 'PATCH') return updateUser(req, res);
  if (req.method === 'DELETE') return deleteUser(req, res);
}
