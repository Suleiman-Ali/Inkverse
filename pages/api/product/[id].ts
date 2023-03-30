import Product from '../../../models/product-model';
import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import filterReqBody from '../../../middleware/filter-body-middleware';
import protect from '../../../middleware/protect-middleware';
import restrictTo from '../../../middleware/restrict-middleware';
import ensureExistence from '../../../middleware/ensure-existence-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteProduct,
  readProduct,
  updateProduct,
} from '../../../controllers/product-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(readProduct);
apiRoute.delete(
  protect,
  restrictTo('admin'),
  ensureExistence(Product),
  deleteProduct
);
apiRoute.patch(
  protect,
  restrictTo('admin'),
  ensureExistence(Product),
  filterReqBody('images', 'createdAt'),
  updateProduct
);
export default apiRoute;
