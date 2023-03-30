import Category from '../../../models/category-model';
import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import protect from '../../../middleware/protect-middleware';
import restrictTo from '../../../middleware/restrict-middleware';
import ensureExistence from '../../../middleware/ensure-existence-middleware';
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
apiRoute.patch(
  protect,
  restrictTo('admin'),
  ensureExistence(Category),
  updateCategory
);
apiRoute.delete(
  protect,
  restrictTo('admin'),
  ensureExistence(Category),
  deleteCategory
);
export default apiRoute;
