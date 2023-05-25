import WrapperElement from '../../elements/common/wrapper-element';
import TProduct from '../../../types/standard-types/product-type';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardModuleProps {
  product: TProduct;
  isSmall?: boolean;
}

export default function ProductCardModule({
  product,
  isSmall,
}: ProductCardModuleProps) {
  const { _id, name, authorName, images, publicationDate } = product;
  const href = `/products/${_id}`;
  const textClass = isSmall ? 'text-sm' : 'text-base';
  const title = `${name} - ${authorName} - ${publicationDate}`;
  return (
    <Link
      href={href}
      key={_id}
      className="w-full flex flex-col gap-3 group"
      title={title}
    >
      <Image
        width={300}
        height={400}
        src={images[0]}
        alt={name}
        className="w-full h-auto shadow rounded group-hover:-translate-y-1 group-hover:shadow-md transition-all"
      />
      <WrapperElement className="flex flex-col gap-0.5">
        <p className={`text-black leading-snug ${textClass} truncate`}>
          {name}
        </p>
        <p className="text-gray text-xs truncate">
          {authorName} - {publicationDate}
        </p>
      </WrapperElement>
    </Link>
  );
}
