import dbConnect from '../../../utils/db-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { createOrder } from '../../../controllers/order-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'POST') return createOrder(req, res);
}
