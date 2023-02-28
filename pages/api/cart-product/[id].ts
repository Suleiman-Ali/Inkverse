import dbConnect from '../../../utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteCartProduct,
  readCartProducts,
  updateCartProduct,
} from '../../../controllers/cart-product-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'GET') return readCartProducts(req, res);
  if (req.method === 'PATCH') return updateCartProduct(req, res);
  if (req.method === 'DELETE') return deleteCartProduct(req, res);
}
