import dbConnect from '../../../utils/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteReview,
  readReviews,
  updateReview,
} from '../../../controllers/review-controller';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === 'GET') return readReviews(req, res);
  if (req.method === 'PATCH') return updateReview(req, res);
  if (req.method === 'DELETE') return deleteReview(req, res);
}
