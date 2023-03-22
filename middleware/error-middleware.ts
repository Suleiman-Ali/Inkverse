import json from '../utils/json';
import { NextApiRequest, NextApiResponse } from 'next';

export default function globalErrorHandler(
  err: any,
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(400).json(json('Could not perform operation'));
}
