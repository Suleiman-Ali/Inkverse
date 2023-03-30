import CartProduct from '../../../models/cart-product-model';
import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import filterReqBody from '../../../middleware/filter-body-middleware';
import protect from '../../../middleware/protect-middleware';
import restrictTo from '../../../middleware/restrict-middleware';
import ensureExistence from '../../../middleware/ensure-existence-middleware';
import ensureOwnership from '../../../middleware/ensure-ownership-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteCartProduct,
  readUserCartProducts,
  updateCartProduct,
} from '../../../controllers/cart-product-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});

apiRoute.use(dbConnectMiddleware);
apiRoute.get(protect, restrictTo('user'), readUserCartProducts);
apiRoute.delete(
  protect,
  restrictTo('user'),
  ensureExistence(CartProduct),
  ensureOwnership(CartProduct, 'user'),
  deleteCartProduct
);
apiRoute.patch(
  protect,
  restrictTo('user'),
  ensureExistence(CartProduct),
  ensureOwnership(CartProduct, 'user'),
  filterReqBody('user', 'product'),
  updateCartProduct
);
export default apiRoute;
