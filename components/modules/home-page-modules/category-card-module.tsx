import Link from 'next/link';
import Image from 'next/image';
import TCategoryWithProducts from '../../../types/category-with-products-type';
import WrapperElement from '../../elements/common/wrapper-element';

interface CategoryCardModuleProps {
  category: TCategoryWithProducts;
}

export default function CategoryCardModule({
  category,
}: CategoryCardModuleProps) {
  const { _id, name, sub, count, products } = category;
  return (
    <Link
      href={`/products?category=${_id}`}
      key={name}
      className="relative w-full bg-white px-3 py-16 shadow flex flex-col gap-3 rounded overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all"
    >
      <div className="w-full absolute top-0 left-0 h-[35%] bg-primary" />
      <WrapperElement className="self-center flex gap-1.5 justify-center items-center">
        {products.slice(0, 5).map((product) => (
          <Image
            key={product._id}
            width={55}
            height={55}
            src={product.images[0]}
            alt={product.images[0]}
            className="w-full max-w-[54px] rounded-sm shadow bg-white p-0.5 z-10"
          />
        ))}
      </WrapperElement>
      <WrapperElement className="flex flex-col gap-0.5 leading-snug">
        <p className="text-black text-base">{name}</p>
        <p className="text-gray text-sm">{count} Books</p>
      </WrapperElement>
      <p className="text-gray text-xs">{sub}</p>
    </Link>
  );
}
