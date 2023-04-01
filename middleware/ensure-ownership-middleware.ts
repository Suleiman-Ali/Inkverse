import createError from '../utils/create-error';
import { NextApiResponse } from 'next';
import { Model } from 'mongoose';

export default function ensureOwnership(
  Model: Model<any>,
  ownerProperty: 'user' | '_id'
) {
  return async (req: any, res: NextApiResponse, next: any) => {
    const resourceOwnerId = (await Model.findById(req.query.id))[ownerProperty];
    if (resourceOwnerId === req.user.id) return next();
    throw createError('AuthorizationError', 'Request is not authorized');
  };
}
