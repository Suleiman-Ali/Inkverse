export function isIncludesAtLeastOne(val: any[]) {
  return val.length > 0;
}

export function deleteProperties(obj: any, ...args: any[]) {
  for (let arg of args) if (obj[arg]) delete obj[arg];
}

export function calcAmount(cartProducts: any[]) {
  return cartProducts.reduce(
    (total: number, { product, quantity }: any) =>
      total + product.price * quantity,
    0
  );
}

export function cartProductsToOrderProducts(cartProducts: any[]) {
  return cartProducts.map(({ product, quantity }) => ({ product, quantity }));
}

// const card = await stripe.paymentMethods.create({
//   type: 'card',
//   card: {
//     number: '4242424242424242',
//     exp_month: 12,
//     exp_year: 2024,
//     cvc: '424',
//   },
// });
// res.send(card.id);
