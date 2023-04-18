import ProductCardModule from './product-card-module';
import PrimaryLinkElement from '../elements/primary-link-element';
import SectionTitleElement from '../elements/section-title-element';
import TProduct from '../../types/product-type';

interface ProductRowModuleProps {
  products: TProduct[];
  text: string;
}

export default function ProductRowModule({
  products,
  text,
}: ProductRowModuleProps) {
  return (
    <div className="w-full max-w-6xl m-auto flex flex-col gap-5 px-3 py-12">
      <SectionTitleElement text={text} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
        {products.map((product) => (
          <ProductCardModule key={product._id} product={product} />
        ))}
      </div>
      <PrimaryLinkElement href="/books" text="See More" />
    </div>
  );
}
