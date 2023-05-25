import Category from '../../models/category-model';
import TCategory from '../../types/standard-types/category-type';
import serializeJson from '../helper-functions/serialize-json';

export default async function fetchAllCategories() {
  const categories = await Category.find().select('name');
  return serializeJson<TCategory[]>(categories);
}
