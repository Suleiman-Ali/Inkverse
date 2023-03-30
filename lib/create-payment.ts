import stripe from '../configs/stripe-config';

export default async function createPayment(
  payment_method: string,
  amount: number
) {
  const { id: paymentId, amount: fullAmount } =
    await stripe.paymentIntents.create({
      payment_method,
      amount: amount * 100,
      currency: 'usd',
      confirm: true,
    });
  return { paymentId, amount: fullAmount / 100 };
}
