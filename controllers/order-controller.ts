import Order from '../models/order-model';
import CartProduct from '../models/cart-product-model';
import createPayment from '../lib/create-payment';
import json from '../utils/json';
import manipulate from '../utils/query-manipulation';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  cartProductsToOrderProducts,
  filterUnavailableCartProducts,
} from '../utils/helper-functions';

// export async function createOrder(req: NextApiRequest, res: NextApiResponse) {
//   const card = await stripe.paymentMethods.create({
//     type: 'card',
//     card: {
//       number: '4242424242424242',
//       exp_month: 12,
//       exp_year: 2024,
//       cvc: '424',
//     },
//   });
//   res.send(card.id);
// }

export async function createOrder(req: NextApiRequest, res: NextApiResponse) {
  const { userId, paymentMethodId } = req.body;
  let cartProducts = await CartProduct.find({ user: userId });
  cartProducts = filterUnavailableCartProducts(cartProducts);

  const { paymentId, amount } = await createPayment(
    cartProducts,
    paymentMethodId
  );

  const order = await Order.create({
    user: cartProducts[0].user,
    products: cartProductsToOrderProducts(cartProducts),
    paymentId,
    amount,
  });
  res.status(200).json(json({ order }));
}

export async function readAllOrders(req: NextApiRequest, res: NextApiResponse) {
  const [orders, count] = await manipulate(Order.find(), req.query);
  res.status(200).json(json({ orders, count }));
}

export async function readOrders(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const [orders, count] = await manipulate(Order.find({ user: id }), req.query);
  res.status(200).json(json({ orders, count }));
}
