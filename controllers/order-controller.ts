import { NextApiRequest, NextApiResponse } from 'next';
import { successJson, failureJson } from '../utils/json';

export async function createOrder(req: NextApiRequest, res: NextApiResponse) {}
export async function readAllOrders(
  req: NextApiRequest,
  res: NextApiResponse
) {}
export async function readOrders(req: NextApiRequest, res: NextApiResponse) {}
export async function readOrder(req: NextApiRequest, res: NextApiResponse) {}
export async function updateOrder(req: NextApiRequest, res: NextApiResponse) {}
export async function deleteOrder(req: NextApiRequest, res: NextApiResponse) {}
