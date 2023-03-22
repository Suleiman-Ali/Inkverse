import nextConnect from 'next-connect';
import dbConnectMiddleware from '../../../middleware/db-connect-middleware';
import globalErrorHandler from '../../../middleware/error-middleware';
import globalNoMatchHandler from '../../../middleware/no-match-middleware';
import filterReqBody from '../../../middleware/filter-body-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteUser,
  readUser,
  updateUser,
} from '../../../controllers/user-controller';

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError: globalErrorHandler,
  onNoMatch: globalNoMatchHandler,
});
apiRoute.use(dbConnectMiddleware);
apiRoute.get(readUser);
apiRoute.delete(deleteUser);
apiRoute.patch(
  filterReqBody('password', 'image', 'role', 'active', 'createdAt'),
  updateUser
);
export default apiRoute;
