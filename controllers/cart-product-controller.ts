import CartProduct from '../models/cart-product-model';
import manipulate from '../utils/query-manipulation';
import json from '../utils/json';
import { NextApiRequest, NextApiResponse } from 'next';

export async function createCartProduct(req: any, res: NextApiResponse) {
  const { id: user } = req.user;
  const { product, quantity } = req.body;
  const cartProduct = await CartProduct.create({ user, product, quantity });
  res.status(201).json(json({ cartProduct }));
}

export async function readUserCartProducts(req: any, res: NextApiResponse) {
  const { id: user } = req.user;
  const [cartProducts, count] = await manipulate(
    CartProduct.find({ user }),
    req.query,
    'cartProduct'
  );
  res.status(200).json(json({ cartProducts, count }));
}

export async function updateCartProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const cartProduct = await CartProduct.findByIdAndUpdate(id, req.body);
  res.status(200).json(json({ cartProduct }));
}

export async function deleteCartProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const cartProduct = await CartProduct.findByIdAndDelete(id);
  res.status(200).json(json({}));
}
