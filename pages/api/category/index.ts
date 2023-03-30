import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import restrictTo from '../../../middleware/restrict-middleware';
import protect from '../../../middleware/protect-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  createCategory,
  readAllCategories,
} from '../../../controllers/category-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(readAllCategories);
apiRoute.post(protect, restrictTo('admin'), createCategory);
export default apiRoute;
