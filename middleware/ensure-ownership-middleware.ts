import mongoose from 'mongoose';
import createError from '../utils/create-error';
import { NextApiResponse } from 'next';

export default function ensureOwnership(
  Model: mongoose.Model<any>,
  userProperty: 'user' | '_id'
) {
  return async (req: any, res: NextApiResponse, next: any) => {
    const resourceOwnerId = (await Model.findById(req.query.id))[userProperty];
    if (resourceOwnerId === req.user.id) return next();
    throw createError('AuthorizationError', 'Request is not authorized');
  };
}
