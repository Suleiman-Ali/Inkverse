import TCategory from './category-type';
import TProduct from './product-type';

type TCategoryWithProducts = TCategory & {
  count: number;
  products: TProduct[];
};

export default TCategoryWithProducts;
