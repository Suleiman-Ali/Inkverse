import TUser from './user-type';
import TProduct from './product-type';

type TCartProduct = {
  _id: string;
  user: TUser;
  product: TProduct;
  quantity: number;
};

export default TCartProduct;
