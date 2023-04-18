import TCategory from './category-type';

type TProduct = {
  _id: string;
  name: string;
  authorName: string;
  description: string;
  price: number;
  categories: TCategory[];
  images: string[];
  tag: 'none' | 'popular' | 'recommended';
  createdAt: number;
};

export default TProduct;
