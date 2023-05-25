import Category from '../../models/category-model';
import Product from '../../models/product-model';
import TCategoryWithProducts from '../../types/other/category-with-products-type';
import TCategory from '../../types/standard-types/category-type';
import TProduct from '../../types/standard-types/product-type';
import serializeJson from '../helper-functions/serialize-json';

export default async function fetchTaggedCategories(
  tag: 'popular' | 'recommended'
) {
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
