import Review from '../models/review-model';
import manipulate from '../utils/query-manipulation';
import json from '../utils/json';
import { NextApiRequest, NextApiResponse } from 'next';

export async function createReview(req: NextApiRequest, res: NextApiResponse) {
  const { text, user, product, rate } = req.body;
  const review = await Review.create({ user, product, text, rate });
  res.status(201).json(json({ review }));
}

export async function readProductReviews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: product } = req.query;
  const [reviews, count] = await manipulate(
    Review.find({ product }),
    req.query,
    'review'
  );
  res.status(200).json(json({ reviews, count }));
}

export async function updateReview(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const review = await Review.findByIdAndUpdate(id, req.body);
  res.status(200).json(json({ review }));
}

export async function deleteReview(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const review = await Review.findByIdAndDelete(id);
  res.status(200).json(json({}));
}
