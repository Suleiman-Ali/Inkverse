import json from '../utils/json';
import { NextApiRequest, NextApiResponse } from 'next';

export default function globalNoMatchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(400).json(json('Route unavailable'));
}
