export function calcAmount(cartProducts: any[]) {
  return cartProducts.reduce(
    (total: number, { product, quantity }: any) =>
      total + product.price * quantity,
    0
  );
}

export function cartProductsToOrderProducts(cartProducts: any[]) {
  return cartProducts.map(({ product, quantity }) => {
    const { name, price, images } = product;
    return { name, price, quantity, image: images[0] };
  });
}
