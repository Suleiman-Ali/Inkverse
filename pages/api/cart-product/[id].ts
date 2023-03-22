import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import filterReqBody from '../../../middleware/filter-body-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteCartProduct,
  readCartProducts,
  updateCartProduct,
} from '../../../controllers/cart-product-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(readCartProducts);
apiRoute.patch(filterReqBody('user', 'product'), updateCartProduct);
apiRoute.delete(deleteCartProduct);
export default apiRoute;
