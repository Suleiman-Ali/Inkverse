import dbConnect from '../../../utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  createProduct,
  readProducts,
} from '../../../controllers/product-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'POST') return createProduct(req, res);
  if (req.method === 'GET') return readProducts(req, res);
}
