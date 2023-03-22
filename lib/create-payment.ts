import stripe from '../configs/stripe-config';
import { calcAmount } from '../utils/helper-functions';

export default async function createPayment(
  cartProducts: any[],
  paymentMethodId: string
) {
  const { id: paymentId, amount } = await stripe.paymentIntents.create({
    amount: calcAmount(cartProducts) * 100,
    payment_method: paymentMethodId,
    currency: 'usd',
    confirm: true,
  });
  return { paymentId, amount: amount / 100 };
}
