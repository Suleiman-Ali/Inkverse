import Link from 'next/link';
import Image from 'next/image';
import TCategoryWithProducts from '../../types/category-with-products-type';

interface CategoryCardModuleProps {
  category: TCategoryWithProducts;
}

export default function CategoryCardModule({
  category,
}: CategoryCardModuleProps) {
  const { name, sub, count, products } = category;
  return (
    <Link
      href="/books"
      key={name}
      className="relative w-full bg-white px-3 py-16 shadow flex flex-col gap-3 rounded overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all"
    >
      <div className="absolute top-0 left-0 h-[35%] w-full bg-primary" />
      <div className="flex gap-1.5 self-center">
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
      </div>
      <div className="flex flex-col gap-0.5 leading-snug">
        <p className="text-black text-base">{name}</p>
        <p className="text-gray text-sm">{count} Books</p>
      </div>
      <p className="text-gray text-xs">{sub}</p>
    </Link>
  );
}
