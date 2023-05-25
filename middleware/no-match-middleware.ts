import json from '../utils/helper-functions/json';
import { NextApiRequest, NextApiResponse } from 'next';

export default function globalNoMatchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(404).json(json('Resource does not exist'));
}
