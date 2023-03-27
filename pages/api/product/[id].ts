import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import filterReqBody from '../../../middleware/filter-body-middleware';
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
apiRoute.patch(
  filterReqBody('images', 'available', 'createdAt'),
  updateProduct
);
apiRoute.delete(deleteProduct);
export default apiRoute;
