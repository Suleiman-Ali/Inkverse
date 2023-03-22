import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import filterReqBody from '../../../middleware/filter-body-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteReview,
  readReviews,
  updateReview,
} from '../../../controllers/review-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(readReviews);
apiRoute.patch(filterReqBody('user', 'product', 'createdAt'), updateReview);
apiRoute.delete(deleteReview);
export default apiRoute;
