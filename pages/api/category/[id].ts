import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteCategory,
  updateCategory,
} from '../../../controllers/category-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.patch(updateCategory);
apiRoute.delete(deleteCategory);
export default apiRoute;
