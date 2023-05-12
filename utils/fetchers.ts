import Category from '../models/category-model';
import Product from '../models/product-model';
import TCategory from '../types/category-type';
import TCategoryWithProducts from '../types/category-with-products-type';
import TProduct from '../types/product-type';
import manipulate from './query-manipulation';

function serializeJson<T>(data: any): T {
  return JSON.parse(JSON.stringify(data));
}

export async function fetchTaggedCategories(tag: 'popular' | 'recommended') {
  let categories: TCategory[] = await Category.find({ tag })
    .select('name sub')
    .limit(4);
  let categoriesWithProducts: TCategoryWithProducts[] = [];
  for (let { _id, name, sub, tag } of categories) {
    let products: TProduct[] = await Product.find({
      categories: { $in: _id },
    }).select('images');
    const count = products.length;
    products = products.slice(0, 4);
    categoriesWithProducts.push({ _id, name, sub, tag, count, products });
  }
  return serializeJson<TCategoryWithProducts[]>(categoriesWithProducts);
}

export async function fetchTaggedProducts(tag: 'popular' | 'recommended') {
  const products: TProduct[] = await Product.find({ tag })
    .select('name authorName images publicationDate')
    .limit(6);
  return serializeJson<TProduct[]>(products);
}

export async function fetchAllCategories() {
  const categories = await Category.find().select('name');
  return serializeJson<TCategory[]>(categories);
}

export async function fetchAllProducts(query: any = {}) {
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
