import ProductsPageTemplate from '../../components/templates/products-page-template';
import dbConnect from '../../configs/db-config';
import TCategory from '../../types/category-type';
import TProduct from '../../types/product-type';
import TProductsQuery from '../../types/products-query-type';
import { fetchAllCategories } from '../../utils/fetchers';
import { fetchAllProducts } from '../../utils/fetchers';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  await dbConnect();
  const [products, count] = await fetchAllProducts(query);
  const categories = await fetchAllCategories();
  return {
    props: { categories, products, count, query },
  };
};

interface ProductsPageProps {
  categories: TCategory[];
  products: TProduct[];
  query: TProductsQuery;
  count: number;
}

export default function ProductsPage(props: ProductsPageProps) {
  return <ProductsPageTemplate {...props} />;
}
