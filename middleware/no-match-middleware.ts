import json from '../utils/json';
import { NextApiRequest, NextApiResponse } from 'next';

export default function globalNoMatchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(404).json(json('Could not find requested route'));
}
