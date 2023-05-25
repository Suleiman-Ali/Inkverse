import TCategory from '../standard-types/category-type';
import TProduct from '../standard-types/product-type';

type TCategoryWithProducts = TCategory & {
  count: number;
  products: TProduct[];
};

export default TCategoryWithProducts;
