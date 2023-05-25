import WrapperElement from '../../elements/common/wrapper-element';
import Stars from 'react-stars';

interface ReviewsSectionIntroModuleProps {
  reviewsCount: number;
  allReviewsAverageRating: number;
}

export default function ReviewsSectionIntroModule({
  allReviewsAverageRating,
  reviewsCount,
}: ReviewsSectionIntroModuleProps) {
  return (
    <WrapperElement className="flex justify-between items-center">
      <WrapperElement className="max-w-max flex flex-col items-start gap-0.5">
        <p className="text-black text-lg sm:text-xl font-semibold">
          Customer Reviews
        </p>
        <p className="text-gray text-xs sm:text-sm">
          {reviewsCount} Global Ratings
        </p>
      </WrapperElement>
      <WrapperElement className="max-w-max flex flex-col items-end gap-0.5">
        <p className="text-black text-sm sm:text-base leading-none">
          <span className="font-medium">
            {allReviewsAverageRating.toFixed(1)}
          </span>{' '}
          out of 5
        </p>
        <Stars
          size={17.5}
          count={5}
          value={allReviewsAverageRating}
          color1="#919191"
          color2="#373737"
          edit={false}
        />
      </WrapperElement>
    </WrapperElement>
  );
}
