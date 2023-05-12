import HomePageTemplate from '../components/templates/home-page-template';
import dbConnect from '../configs/db-config';
import TProduct from '../types/product-type';
import TCategoryWithProducts from '../types/category-with-products-type';
import { fetchTaggedCategories, fetchTaggedProducts } from '../utils/fetchers';

export async function getServerSideProps() {
  await dbConnect();
  const popularProducts = await fetchTaggedProducts('popular');
  const recommendedProducts = await fetchTaggedProducts('recommended');
  const popularCategories = await fetchTaggedCategories('popular');
  const recommendedCategories = await fetchTaggedCategories('recommended');
  return {
    props: {
      popularProducts,
      recommendedProducts,
      popularCategories,
      recommendedCategories,
    },
  };
}

interface HomePageProps {
  popularProducts: TProduct[];
  recommendedProducts: TProduct[];
  popularCategories: TCategoryWithProducts[];
  recommendedCategories: TCategoryWithProducts[];
}

export default function HomePage(props: HomePageProps) {
  return <HomePageTemplate {...props} />;
}

//// NOTE: Backend
// DONE: Image Uploads
// DONE: Payment & Order
// DONE: Searching & Filtering & Sorting & Field Limiting & Pagination
// DONE: Error Handling
// DONE: Login & Auths & Protection
// TODO: (Later) Generate Image & Image Remove & Images Update & Password Reset

//// NOTE: Frontend
// DOING: HomePage
// DOING: ProductsPage
// TODO: ProductPage

// NOTE: All
// TODO: Refactor
// TODO: Improve performance
// TODO: Ensure styles and animation
