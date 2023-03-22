import { NextApiRequest, NextApiResponse } from 'next';

export default function filterReqBody(...args: any[]) {
  return (req: NextApiRequest, res: NextApiResponse, next: any) => {
    for (let arg of args)
      if (Object.keys(req.body).includes(arg)) delete req.body[arg];
    next();
  };
}
