import mongoose from 'mongoose';
import createError from '../utils/create-error';
import { NextApiRequest, NextApiResponse } from 'next';

export default function ensureExistence(Model: mongoose.Model<any>) {
  return async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const resource = await Model.findById(req.query.id);
    if (resource) return next();
    throw createError('ResourceNotFoundError', 'Resource does not exist');
  };
}
