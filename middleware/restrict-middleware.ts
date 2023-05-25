import createError from '../utils/helper-functions/create-error';

export default function restrictTo(role: 'admin' | 'user') {
  return (req: any, res: any, next: any) => {
    if (req.user.role === role) return next();
    throw createError('AuthorizationError', 'Authorization is required');
  };
}
