import nextConnect from 'next-connect';
import upload from '../../../utils/multer-config';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  createProduct,
  readProducts,
} from '../../../controllers/product-controller';
import { dbConnectMiddleware } from '../../../utils/db-connect';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({});
apiRoute.use(upload.array('images', 4));
apiRoute.use(dbConnectMiddleware);
apiRoute.post(createProduct);
apiRoute.get(readProducts);
export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};
