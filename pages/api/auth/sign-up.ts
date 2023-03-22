import nextConnect from 'next-connect';
import upload from '../../../configs/multer-config';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../../controllers/user-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.post(upload.single('image'), createUser);

export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};
