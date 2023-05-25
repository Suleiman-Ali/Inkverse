import Product from '../../models/product-model';
import TProduct from '../../types/standard-types/product-type';
import serializeJson from '../helper-functions/serialize-json';

export default async function fetchProduct(id: string) {
  const product = await Product.findById(id).select(
    'name authorName description price publicationDate categories images'
  );
  return serializeJson<TProduct>(product);
}
