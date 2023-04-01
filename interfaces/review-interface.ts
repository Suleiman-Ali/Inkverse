interface IReview {
  _id: string;
  user: string;
  product: string;
  text: string;
  rate: number;
  createdAt: number;
}

export default IReview;
