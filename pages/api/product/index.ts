import nextConnect from 'next-connect';
import upload from '../../../configs/multer-config';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import protect from '../../../middleware/protect-middleware';
import restrictTo from '../../../middleware/restrict-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  createProduct,
  readAllProducts,
} from '../../../controllers/product-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(readAllProducts);
apiRoute.post(
  protect,
  restrictTo('admin'),
  upload.array('images', 4),
  createProduct
);

export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};
