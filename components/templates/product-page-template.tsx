import WrapperElement from '../elements/common/wrapper-element';
import NavbarModule from '../modules/common/navbar-module';
import FooterModule from '../modules/common/footer-module';
import useReactiveEffect from '../../hooks/use-reactive-effect';
import OptionsListModule from '../modules/common/options-list-module';
import PaginationModule from '../modules/common/pagination-module';
import ReviewsModule from '../modules/product-page-modules/reviews-module';
import ProductDetailsModule from '../modules/product-page-modules/product-details-module';
import ReviewsSectionIntroModule from '../modules/product-page-modules/reviews-section-intro-module';
import useQueryState from '../../hooks/use-query-state';
import TReviewsQuery from '../../types/query-types/reviews-query-type';
import TProduct from '../../types/standard-types/product-type';
import TReview from '../../types/standard-types/review-type';
import {
  RATE_OPTIONS,
  SORT_OPTIONS,
} from '../../static-data/product-page-data';

interface ProductPageTemplateProps {
  query: TReviewsQuery;
  product: TProduct;
  reviews: TReview[];
  allReviewsCount: number;
  allReviewsAverageRating: number;
  reviewsCount: number;
}

export default function ProductPageTemplate({
  query,
  product,
  reviews,
  allReviewsCount,
  allReviewsAverageRating,
  reviewsCount,
}: ProductPageTemplateProps) {
  const {
    queryState: { rate, sort, page },
    queryStateChangeHandler,
    updatePageQuery,
  } = useQueryState<TReviewsQuery>(`/products/${product._id}`, {
    rate: query.rate || '',
    sort: query.sort || '',
    page: query.page || '1',
  });
  useReactiveEffect(updatePageQuery, [rate, sort, page]);

  return (
    <WrapperElement className="flex flex-col">
      <NavbarModule />
      <WrapperElement className="max-w-6xl m-auto flex flex-col gap-5 px-3 py-32">
        <ProductDetailsModule
          product={product}
          allReviewsAverageRating={allReviewsAverageRating}
          allReviewsCount={allReviewsCount}
        />
        <WrapperElement className="flex flex-col gap-3">
          <ReviewsSectionIntroModule
            allReviewsAverageRating={allReviewsAverageRating}
            reviewsCount={reviewsCount}
          />
          <WrapperElement className="flex items-center gap-1">
            <OptionsListModule
              name="rate"
              items={RATE_OPTIONS}
              current={rate}
              onChange={queryStateChangeHandler}
            />
            <OptionsListModule
              name="sort"
              items={SORT_OPTIONS}
              current={sort}
              onChange={queryStateChangeHandler}
            />
          </WrapperElement>
          <ReviewsModule reviews={reviews} />
          <PaginationModule
            count={reviewsCount}
            limit={5}
            current={page}
            onChange={queryStateChangeHandler}
          />
        </WrapperElement>
      </WrapperElement>
      <FooterModule />
    </WrapperElement>
  );
}
