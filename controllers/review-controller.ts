import Review from '../models/review-model';
import { NextApiRequest, NextApiResponse } from 'next';
import { successJson, failureJson } from '../utils/json';
import { manipulate } from '../utils/queryManipulation';

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
    delete req.body?.user;
    delete req.body?.product;
    const review = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
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