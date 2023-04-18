import CategoryCardModule from './category-card-module';
import PrimaryLinkElement from '../elements/primary-link-element';
import SectionTitleElement from '../elements/section-title-element';
import TCategoryWithProducts from '../../types/category-with-products-type';

interface CategoryRowModuleProps {
  categories: TCategoryWithProducts[];
  text: string;
}

export default function CategoryRowModule({
  categories,
  text,
}: CategoryRowModuleProps) {
  return (
    <div className="w-full bg-gray-b py-12">
      <div className="w-full px-3 max-w-6xl m-auto flex flex-col gap-5">
        <SectionTitleElement text={text} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3">
          {categories.map((category) => (
            <CategoryCardModule key={category._id} category={category} />
          ))}
        </div>
        <PrimaryLinkElement href="/books" text="See More" />
      </div>
    </div>
  );
}
