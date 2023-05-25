import ProductPageTemplate from '../../components/templates/product-page-template';
import dbConnect from '../../configs/db-config';
import TProduct from '../../types/standard-types/product-type';
import TReview from '../../types/standard-types/review-type';
import TReviewsQuery from '../../types/query-types/reviews-query-type';
import { GetServerSideProps } from 'next';
import fetchProduct from '../../utils/fetchers/fetch-product';
import fetchProductReviews from '../../utils/fetchers/fetch-product-reviews';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  await dbConnect();
  const product = await fetchProduct(query.id as string);
  const [reviews, allReviewsCount, allReviewsAverageRating, count] =
    await fetchProductReviews(query.id as string, query);
  return {
    props: {
      query,
      product,
      reviews,
      allReviewsCount,
      allReviewsAverageRating,
      reviewsCount: count,
    },
  };
};

interface ProductPageProps {
  query: TReviewsQuery;
  product: TProduct;
  reviews: TReview[];
  allReviewsCount: number;
  allReviewsAverageRating: number;
  reviewsCount: number;
}

export default function ProductPage(props: ProductPageProps) {
  return <ProductPageTemplate {...props} />;
}
