import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import protect from '../../../middleware/protect-middleware';
import restrictTo from '../../../middleware/restrict-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { readAllUsers } from '../../../controllers/user-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(protect, restrictTo('admin'), readAllUsers);
export default apiRoute;
