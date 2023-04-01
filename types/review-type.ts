import TUser from './user-type';
import TProduct from './product-type';

type TReview = {
  _id: string;
  user: TUser;
  product: TProduct;
  text: string;
  rate: number;
  createdAt: number;
};

export default TReview;
