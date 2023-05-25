import Product from '../../models/product-model';
import TProduct from '../../types/standard-types/product-type';
import manipulate from '../helper-functions/query-manipulation';
import serializeJson from '../helper-functions/serialize-json';

export default async function fetchAllProducts(query: any = {}) {
  query.limit = 21;
  const [products, count] = await manipulate<TProduct[]>(
    Product.find().select(
      'name authorName price publicationDate description images'
    ),
    query,
    'product'
  );
  const result: [TProduct[], number] = [
    serializeJson<TProduct[]>(products),
    count,
  ];
  return result;
}
