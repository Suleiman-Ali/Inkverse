import Product from '../../models/product-model';
import TProduct from '../../types/standard-types/product-type';
import serializeJson from '../helper-functions/serialize-json';

export default async function fetchTaggedProducts(
  tag: 'popular' | 'recommended'
) {
  const products: TProduct[] = await Product.find({ tag })
    .select('name authorName images publicationDate')
    .limit(6);
  return serializeJson<TProduct[]>(products);
}
