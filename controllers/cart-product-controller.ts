import CartProduct from '../models/cart-product-model';
import { NextApiRequest, NextApiResponse } from 'next';
import { successJson, failureJson } from '../utils/json';
import { manipulate } from '../utils/queryManipulation';

export async function createCartProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user, product } = req.body;
    const cartProduct = await CartProduct.create({ user, product });
    res.status(201).json(successJson({ cartProduct }));
  } catch (err: any) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readCartProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const [cartProducts, count] = await manipulate(
      CartProduct.find({ user: id }).populate('product'),
      req.query
    );
    res.status(200).json(successJson({ cartProducts, count }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function updateCartProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    delete req.body?.user;
    delete req.body?.product;
    const cartProduct = await CartProduct.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(successJson({ cartProduct }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function deleteCartProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const cartProduct = await CartProduct.findByIdAndDelete(id);
    res.status(200).json(successJson(null));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}
