import nextConnect from 'next-connect';
import upload from '../../../utils/multer-config';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../../controllers/user-controller';
import { dbConnectMiddleware } from '../../../utils/db-connect';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({});
apiRoute.use(upload.single('image'));
apiRoute.use(dbConnectMiddleware);
apiRoute.post(createUser);
export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};
