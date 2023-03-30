import User from '../../../models/user-model';
import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import filterReqBody from '../../../middleware/filter-body-middleware';
import protect from '../../../middleware/protect-middleware';
import restrictTo from '../../../middleware/restrict-middleware';
import ensureExistence from '../../../middleware/ensure-existence-middleware';
import ensureOwnership from '../../../middleware/ensure-ownership-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteUser,
  readUser,
  updateUser,
} from '../../../controllers/user-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(protect, restrictTo('user'), readUser);
apiRoute.delete(
  protect,
  restrictTo('user'),
  ensureExistence(User),
  ensureOwnership(User, '_id'),
  deleteUser
);
apiRoute.patch(
  protect,
  restrictTo('user'),
  ensureExistence(User),
  ensureOwnership(User, '_id'),
  filterReqBody('password', 'image', 'role', 'active', 'createdAt'),
  updateUser
);
export default apiRoute;
