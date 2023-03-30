import Review from '../../../models/review-model';
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
  deleteReview,
  readProductReviews,
  updateReview,
} from '../../../controllers/review-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(readProductReviews);
apiRoute.delete(
  protect,
  restrictTo('user'),
  ensureExistence(Review),
  ensureOwnership(Review, 'user'),
  deleteReview
);
apiRoute.patch(
  protect,
  restrictTo('user'),
  ensureExistence(Review),
  ensureOwnership(Review, 'user'),
  filterReqBody('user', 'product', 'createdAt'),
  updateReview
);
export default apiRoute;
