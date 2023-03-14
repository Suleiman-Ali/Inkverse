import Review from '../models/review-model';
import manipulate from '../utils/query-manipulation';
import { NextApiRequest, NextApiResponse } from 'next';
import { successJson, failureJson } from '../utils/json';
import { deleteProperties } from '../utils/helpers';

export async function createReview(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { text, user, product, rate } = req.body;
    const review = await Review.create({ user, product, text, rate });
    res.status(201).json(successJson({ review }));
  } catch (err: any) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readReviews(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const [reviews, count] = await manipulate(
      Review.find({ product: id }),
      req.query,
      'review'
    );
    res.status(200).json(successJson({ reviews, count }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function updateReview(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    deleteProperties(req.body, 'user', 'product');
    const review = await Review.findByIdAndUpdate(id, req.body);
    res.status(200).json(successJson({ review }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function deleteReview(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const review = await Review.findByIdAndDelete(id);
    res.status(200).json(successJson(null));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}
