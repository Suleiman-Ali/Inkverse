import TProduct from '../../../types/product-type';
import PrimaryLinkElement from '../../elements/common/primary-link-element';
import WrapperElement from '../../elements/common/wrapper-element';
import SectionTitleElement from '../../elements/home-page-elements/section-title-element';
import ProductCardModule from '../common/product-card-module';

interface ProductRowModuleProps {
  products: TProduct[];
  text: string;
}

export default function ProductRowModule({
  products,
  text,
}: ProductRowModuleProps) {
  return (
    <WrapperElement className="max-w-6xl m-auto flex flex-col gap-5 px-3 py-12">
      <SectionTitleElement text={text} />
      <WrapperElement className="grid grid-cols-[repeat(auto-fit,minmax(132.5px,1fr))] gap-3">
        {products.map((product) => (
          <ProductCardModule key={product._id} product={product} />
        ))}
      </WrapperElement>
      <PrimaryLinkElement href="/products" text="See More" />
    </WrapperElement>
  );
}
