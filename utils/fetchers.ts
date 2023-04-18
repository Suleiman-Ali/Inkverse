import Category from '../models/category-model';
import Product from '../models/product-model';
import TCategory from '../types/category-type';
import TCategoryWithProducts from '../types/category-with-products-type';
import TProduct from '../types/product-type';

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
  const products: TProduct[] = await Product.find()
    .select('name authorName images')
    .limit(6);
  return serializeJson<TProduct[]>(products);
}
