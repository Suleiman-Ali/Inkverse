import json from '../utils/helper-functions/json';
import capitalize from 'lodash/capitalize';
import { NextApiRequest, NextApiResponse } from 'next';

const handleAuthenticationError = (err: any, res: NextApiResponse) => {
  const { message } = err;
  res.status(403).json(json(message));
};

const handleAuthorizationError = (err: any, res: NextApiResponse) => {
  const { message } = err;
  res.status(401).json(json(message));
};

const handleResourceNotFoundError = (err: any, res: NextApiResponse) => {
  const { message } = err;
  res.status(404).json(json(message));
};

const handleInvalidFileTypeError = (err: any, res: NextApiResponse) => {
  const { message } = err;
  res.status(400).json(json(message));
};

const handleDuplicateKeyError = (err: any, res: NextApiResponse) => {
  const [key] = Object.keys(err.keyValue).map((key) => err.keyValue[key]);
  const message = `${capitalize(key)} already exists`;
  res.status(400).json(json(message));
};

const handleCastError = (err: any, res: NextApiResponse) => {
  const [error] = Object.keys(err.errors).map((key) => err.errors[key]);
  const message = `${capitalize(error.path)} does not exist`;
  return res.status(400).json(json(message));
};

const handleValidationError = (err: any, res: NextApiResponse) => {
  const [error] = Object.keys(err.errors).map((key) => err.errors[key]);
  const message = error.properties.message;
  return res.status(400).json(json(message));
};

export default function globalErrorHandler(
  err: any,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const error = JSON.stringify(err);
  if (error.includes('AuthenticationError'))
    return handleAuthenticationError(err, res);
  if (error.includes('AuthorizationError'))
    return handleAuthorizationError(err, res);
  if (error.includes('ResourceNotFoundError'))
    return handleResourceNotFoundError(err, res);
  if (error.includes('InvalidFileTypeError'))
    return handleInvalidFileTypeError(err, res);
  if (error.includes('11000')) return handleDuplicateKeyError(err, res);
  if (error.includes('CastError')) return handleCastError(err, res);
  if (error.includes('ValidatorError')) return handleValidationError(err, res);
  return res.status(400).json(json('Unknown error occurred'));
}
