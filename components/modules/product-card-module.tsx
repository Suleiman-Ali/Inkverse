import Link from 'next/link';
import Image from 'next/image';
import TProduct from '../../types/product-type';

interface ProductCardModuleProps {
  product: TProduct;
}

export default function ProductCardModule({ product }: ProductCardModuleProps) {
  const { _id, name, authorName, images } = product;
  const href = `/books/${_id}`;
  return (
    <Link href={href} key={_id} className="flex flex-col gap-3 group">
      <Image
        width={350}
        height={500}
        src={images[0]}
        alt={name}
        className="w-full max-w-[349px] shadow rounded group-hover:-translate-y-1 group-hover:shadow-md transition-all"
      />
      <div className="flex flex-col gap-0.5">
        <p className="text-black text-base leading-snug">{name}</p>
        <p className="text-gray text-xs">{authorName}</p>
      </div>
    </Link>
  );
}
