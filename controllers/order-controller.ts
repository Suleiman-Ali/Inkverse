import Order from '../models/order-model';
import CartProduct from '../models/cart-product-model';
import createPayment from '../lib/create-payment';
import json from '../utils/json';
import manipulate from '../utils/query-manipulation';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  calcAmount,
  cartProductsToOrderProducts,
} from '../utils/helper-functions';

// import stripe from '../configs/stripe-config';

// const getPaymentId = async () => {
//   const { id } = await stripe.paymentMethods.create({
//     type: 'card',
//     card: {
//       number: '4242424242424242',
//       exp_month: 12,
//       exp_year: 2024,
//       cvc: '424',
//     },
//   });
//   return id;
// };

export async function createOrder(req: any, res: NextApiResponse) {
  const { paymentMethodId } = req.body;
  const { id: user } = req.user;
  const cartProducts = await CartProduct.find({ user });

  const { paymentId, amount } = await createPayment(
    paymentMethodId,
    calcAmount(cartProducts)
  );

  const order = await Order.create({
    user,
    paymentId,
    amount,
    products: cartProductsToOrderProducts(cartProducts),
  });
  res.status(201).json(json({ order }));
}

export async function readAllOrders(req: NextApiRequest, res: NextApiResponse) {
  const [orders, count] = await manipulate(Order.find(), req.query, 'order');
  res.status(200).json(json({ orders, count }));
}

export async function readUserOrders(req: any, res: NextApiResponse) {
  const { id: user } = req.user;
  const [orders, count] = await manipulate(
    Order.find({ user }),
    req.query,
    'order'
  );
  res.status(200).json(json({ orders, count }));
}
