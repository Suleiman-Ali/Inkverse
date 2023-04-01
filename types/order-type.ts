import TUser from './user-type';

type TOrder = {
  _id: string;
  user: TUser;
  products: {
    _id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
  paymentId: string;
  amount: number;
  createdAt: number;
};

export default TOrder;
