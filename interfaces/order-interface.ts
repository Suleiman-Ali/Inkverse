interface IOrder {
  _id: string;
  user: string;
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
}

export default IOrder;
