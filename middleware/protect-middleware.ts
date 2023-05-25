import createError from '../utils/helper-functions/create-error';
import { getSession } from 'next-auth/react';

export default async function protect(req: any, res: any, next: any) {
  const session = await getSession({ req });
  if (session) return (req.user = session.user) && next();
  throw createError('AuthenticationError', 'Authentication is required');
}
