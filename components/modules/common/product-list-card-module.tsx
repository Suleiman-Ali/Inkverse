import Link from 'next/link';
import Image from 'next/image';
import TProduct from '../../../types/product-type';
import WrapperElement from '../../elements/common/wrapper-element';

interface ProductListCardModuleProps {
  product: TProduct;
}

export default function ProductListCardModule({
  product,
}: ProductListCardModuleProps) {
  const { _id, name, authorName, publicationDate, price, description, images } =
    product;
  const href = `/products/${_id}`;
  const title = `${name} - ${authorName} - ${publicationDate}`;
  return (
    <Link href={href} key={_id} className="flex gap-3 group" title={title}>
      <Image
        width={100}
        height={150}
        src={images[0]}
        alt={name}
        className="w-full hidden sm:block self-start max-w-[99px] shadow rounded group-hover:-translate-y-1 group-hover:shadow-md transition-all"
      />
      <WrapperElement className="flex flex-col gap-1">
        <WrapperElement className="flex justify-between items-center gap-1">
          <p className="text-black text-base sm:text-lg">{name}</p>
          <p className="text-black text-sm sm:text-base">{price}$</p>
        </WrapperElement>
        <p className="text-gray text-xs sm:text-sm">
          {authorName} - {publicationDate}
        </p>
        <p className="text-black text-sm sm:text-base">{description}</p>
      </WrapperElement>
    </Link>
  );
}
