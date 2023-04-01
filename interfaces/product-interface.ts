interface IProduct {
  _id: string;
  name: string;
  authorName: string;
  description: string;
  price: number;
  categories: string[];
  images: string[];
  createdAt: number;
}

export default IProduct;
