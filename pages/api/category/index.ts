import dbConnect from '../../../utils/db-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  createCategory,
  readCategories,
} from '../../../controllers/category-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'POST') return createCategory(req, res);
  if (req.method === 'GET') return readCategories(req, res);
}
