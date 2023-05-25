export default function cartProductsToOrderProducts(cartProducts: any[]) {
  return cartProducts.map(({ product, quantity }) => {
    const { name, price, images } = product;
    return { name, price, quantity, image: images[0] };
  });
}
