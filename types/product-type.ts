import TCategory from './category-type';

type TProduct = {
  _id: string;
  name: string;
  authorName: string;
  description: string;
  price: number;
  categories: TCategory[];
  images: string[];
  createdAt: number;
};

export default TProduct;
