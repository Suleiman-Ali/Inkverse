import CategoryCardModule from './category-card-module';
import WrapperElement from '../../elements/common/wrapper-element';
import PrimaryLinkElement from '../../elements/common/primary-link-element';
import SectionTitleElement from '../../elements/home-page-elements/section-title-element';
import TCategoryWithProducts from '../../../types/other/category-with-products-type';

interface CategoryRowModuleProps {
  categories: TCategoryWithProducts[];
  text: string;
}

export default function CategoryRowModule({
  categories,
  text,
}: CategoryRowModuleProps) {
  return (
    <WrapperElement className="bg-gray-light py-12">
      <WrapperElement className="px-3 max-w-6xl m-auto flex flex-col gap-5">
        <SectionTitleElement text={text} />
        <WrapperElement className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3">
          {categories.map((category) => (
            <CategoryCardModule key={category._id} category={category} />
          ))}
        </WrapperElement>
        <PrimaryLinkElement href="/products" text="See More" />
      </WrapperElement>
    </WrapperElement>
  );
}
