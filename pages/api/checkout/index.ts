import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import protect from '../../../middleware/protect-middleware';
import restrictTo from '../../../middleware/restrict-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { createOrder } from '../../../controllers/order-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.post(protect, restrictTo('user'), createOrder);
export default apiRoute;
