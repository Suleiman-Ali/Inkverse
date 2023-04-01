import createError from '../utils/create-error';
import { NextApiRequest, NextApiResponse } from 'next';
import { Model } from 'mongoose';

export default function ensureExistence(Model: Model<any>) {
  return async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const resource = await Model.findById(req.query.id);
    if (resource) return next();
    throw createError('ResourceNotFoundError', 'Resource does not exist');
  };
}
