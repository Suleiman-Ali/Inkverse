import dbConnect from '../../../utils/db-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteProduct,
  readProduct,
  updateProduct,
} from '../../../controllers/product-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'GET') return readProduct(req, res);
  if (req.method === 'PATCH') return updateProduct(req, res);
  if (req.method === 'DELETE') return deleteProduct(req, res);
}
