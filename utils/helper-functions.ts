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

export function constructQueryUrl(queryObj: any) {
  const query = { ...queryObj };
  const str = Object.keys(query)
    .filter((key) => query[key] && +query[key] !== 1)
    .map((key) => `${key}=${query[key]}`)
    .join('&');
  if (!str) return '/products';
  return `/products?${str}`;
}

export function numberToPaginationArray(n: number) {
  const array: number[] = [];
  for (let i = 1; i <= n; i++) array.push(i);
  return array;
}
