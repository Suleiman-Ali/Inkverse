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

export function filterUnavailableCartProducts(cartProducts: any[]) {
  return cartProducts.filter(
    (cartProduct) => cartProduct.product.available === true
  );
}
