import dbConnect from '../../../utils/db-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { createReview } from '../../../controllers/review-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'POST') return createReview(req, res);
}
