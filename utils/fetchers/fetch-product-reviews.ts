import Review from '../../models/review-model';
import TReview from '../../types/standard-types/review-type';
import manipulate from '../helper-functions/query-manipulation';
import serializeJson from '../helper-functions/serialize-json';

export default async function fetchProductReviews(id: string, query: any = {}) {
  query.limit = 5;
  const allReviews = await Review.find({ product: id }).select('rate');
  const allReviewsCount = allReviews.length;
  const allReviewsAverageRating =
    allReviews.reduce((sum, { rate }) => sum + rate, 0) / allReviews.length ||
    0;

  const [reviews, count] = await manipulate<TReview[]>(
    Review.find({ product: id }).select('title text rate createdAt user'),
    query,
    'review'
  );
  const result: [TReview[], number, number, number] = [
    serializeJson<TReview[]>(reviews),
    allReviewsCount,
    allReviewsAverageRating,
    count,
  ];
  return result;
}
