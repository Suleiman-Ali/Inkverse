export default function calcAmount(cartProducts: any[]) {
  return cartProducts.reduce(
    (total: number, { product, quantity }: any) =>
      total + product.price * quantity,
    0
  );
}
