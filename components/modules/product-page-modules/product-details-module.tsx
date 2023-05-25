import WrapperElement from '../../elements/common/wrapper-element';
import ProductInfo from './product-info-module';
import PrimaryLinkElement from '../../elements/common/primary-link-element';
import TProduct from '../../../types/standard-types/product-type';
import Image from 'next/image';
import Stars from 'react-stars';
import { BsBook } from 'react-icons/bs';
import { CiGlobe, CiBadgeDollar } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { RxCalendar } from 'react-icons/rx';

interface ProductDetailsModuleProps {
  product: TProduct;
  allReviewsAverageRating: number;
  allReviewsCount: number;
}

export default function ProductDetailsModule({
  product: {
    images,
    name,
    price,
    authorName,
    publicationDate,
    description,
    categories,
  },
  allReviewsAverageRating,
  allReviewsCount,
}: ProductDetailsModuleProps) {
  const imageSrc = images[0];
  const allReviewsAverageRatingFixed = allReviewsAverageRating.toFixed(1);
  const category = categories[0].name;
  const priceWithCurrency = `$${price}`;
  return (
    <WrapperElement className="flex flex-col md:flex-row gap-5">
      <Image
        src={imageSrc}
        width={225}
        height={300}
        alt={imageSrc}
        className="max-w-[199px] self-center w-full h-auto shadow-md rounded"
      />
      <WrapperElement className="flex flex-col gap-1.5">
        <h1 className="text-black text-xl sm:text-2xl font-semibold">{name}</h1>
        <WrapperElement className="flex items-center gap-1">
          <p className="text-black text-sm sm:text-base font-medium">
            {allReviewsAverageRatingFixed}
          </p>
          <Stars
            size={17.5}
            count={5}
            value={allReviewsAverageRating}
            color1="#919191"
            color2="#373737"
            edit={false}
          />
          <p className="text-black text-sm sm:text-base">|</p>
          <p className="text-black text-sm sm:text-base">
            {allReviewsCount} Global Ratings
          </p>
        </WrapperElement>
        <WrapperElement className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
          <ProductInfo Icon={CiGlobe} title="Language" text="English" />
          <ProductInfo Icon={BsBook} title="Category" text={category} />
          <ProductInfo Icon={FiUser} title="Author" text={authorName} />
          <ProductInfo
            Icon={RxCalendar}
            title="Publication Date"
            text={publicationDate}
          />
          <ProductInfo
            Icon={CiBadgeDollar}
            title="Price"
            text={priceWithCurrency}
          />
        </WrapperElement>
        <p className="text-black text-sm sm:text-base">{description}</p>
        <PrimaryLinkElement
          href="/sign-in"
          text="Add Cart"
          className="!self-start !px-10 !mt-2 !text-xs sm:!text-sm !rounded-full"
        />
      </WrapperElement>
    </WrapperElement>
  );
}
