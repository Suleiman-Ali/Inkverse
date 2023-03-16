import Order from '../models/order-model';
import CartProduct from '../models/cart-product-model';
import stripe from '../utils/stripe-config';
import { NextApiRequest, NextApiResponse } from 'next';
import { successJson, failureJson } from '../utils/json';
import { calcAmount, cartProductsToOrderProducts } from '../utils/helpers';

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
  try {
    const { userId, paymentMethodId } = req.body;
    const cartProducts = await CartProduct.find({ user: userId }).populate(
      'product'
    );
    const { id: paymentId, amount } = await stripe.paymentIntents.create({
      amount: calcAmount(cartProducts) * 100,
      payment_method: paymentMethodId,
      currency: 'usd',
      confirm: true,
    });
    const order = await Order.create({
      user: cartProducts[0].user,
      products: cartProductsToOrderProducts(cartProducts),
      paymentId,
      amount: amount / 100,
    });
    res.status(200).json(successJson(order));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readAllOrders(
  req: NextApiRequest,
  res: NextApiResponse
) {}
export async function readOrders(req: NextApiRequest, res: NextApiResponse) {}
export async function readOrder(req: NextApiRequest, res: NextApiResponse) {}
export async function updateOrder(req: NextApiRequest, res: NextApiResponse) {}
export async function deleteOrder(req: NextApiRequest, res: NextApiResponse) {}
