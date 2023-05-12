import WrapperElement from '../../elements/common/wrapper-element';
import ProductCardModule from '../common/product-card-module';
import ProductListCardModule from '../common/product-list-card-module';
import TProduct from '../../../types/product-type';

interface ProductsLayoutModuleProps {
  layout: 'grid' | 'list';
  products: TProduct[];
}

export default function ProductsLayoutModule({
  layout,
  products,
}: ProductsLayoutModuleProps) {
  if (products.length === 0)
    return (
      <p className="text-black text-lg sm:text-xl text-center py-36">
        No books found
      </p>
    );

  if (layout === 'grid')
    return (
      <WrapperElement className="grid grid-cols-[repeat(auto-fill,minmax(132.5px,1fr))] gap-3">
        {products.map((product) => (
          <ProductCardModule key={product._id} product={product} isSmall />
        ))}
      </WrapperElement>
    );

  if (layout === 'list')
    return (
      <WrapperElement className="flex flex-col gap-3">
        {products.map((product) => (
          <ProductListCardModule key={product._id} product={product} />
        ))}
      </WrapperElement>
    );

  return <></>;
}
