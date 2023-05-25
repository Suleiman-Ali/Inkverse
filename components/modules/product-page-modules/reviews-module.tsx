import WrapperElement from '../../elements/common/wrapper-element';
import TReview from '../../../types/standard-types/review-type';
import Image from 'next/image';
import Stars from 'react-stars';
import capitalize from 'lodash/capitalize';
import constructReadableDate from '../../../utils/helper-functions/construct-readable-date';

interface ReviewsModuleProps {
  reviews: TReview[];
}

export default function ReviewsModule({ reviews }: ReviewsModuleProps) {
  return (
    <WrapperElement className="flex flex-col gap-3.5">
      {reviews.map(
        ({ _id, title, text, rate, createdAt, user: { name, image } }) => (
          <WrapperElement key={_id} className="flex flex-col gap-0.5">
            <WrapperElement className="flex items-center gap-1.5 mb-1.5 md:mb-0">
              <Image
                src={image}
                width={50}
                height={50}
                alt={image}
                className="w-full max-w-[41px] h-auto rounded-full"
              />
              <p className="text-black text-xs sm:text-sm ">
                {capitalize(name)}
              </p>
            </WrapperElement>
            <WrapperElement className="flex flex-col-reverse items-start md:flex-row md:gap-1.5 md:items-center">
              <Stars
                size={17.5}
                count={5}
                value={rate}
                color1="#919191"
                color2="#373737"
                edit={false}
              />
              <p className="text-black text-sm sm:text-base font-medium leading-none">
                {title}
              </p>
            </WrapperElement>
            <p className="text-gray text-xs sm:text-sm">
              Reviewed on {constructReadableDate(createdAt)}
            </p>
            <p className="text-black text-sm sm:text-base">{text}</p>
          </WrapperElement>
        )
      )}
    </WrapperElement>
  );
}
