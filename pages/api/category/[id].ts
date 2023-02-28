import dbConnect from '../../../utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteCategory,
  updateCategory,
} from '../../../controllers/category-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'PATCH') return updateCategory(req, res);
  if (req.method === 'DELETE') return deleteCategory(req, res);
}
