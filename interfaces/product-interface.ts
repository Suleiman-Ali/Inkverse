interface IProduct {
  _id: string;
  name: string;
  authorName: string;
  description: string;
  price: number;
  categories: string[];
  images: string[];
  tag: 'none' | 'popular' | 'recommended';
  createdAt: number;
}

export default IProduct;
