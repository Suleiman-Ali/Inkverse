import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { createReview } from '../../../controllers/review-controller';
import restrictTo from '../../../middleware/restrict-middleware';
import protect from '../../../middleware/protect-middleware';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.post(protect, restrictTo('user'), createReview);
export default apiRoute;
