import WrapperElement from '../elements/common/wrapper-element';
import NavbarModule from '../modules/common/navbar-module';
import HeaderModule from '../modules/home-page-modules/header-module';
import CategoryRowModule from '../modules/home-page-modules/category-row-module';
import ProductRowModule from '../modules/home-page-modules/product-row-module';
import FooterModule from '../modules/common/footer-module';
import TCategoryWithProducts from '../../types/other/category-with-products-type';
import TProduct from '../../types/standard-types/product-type';

interface HomePageTemplateProps {
  popularProducts: TProduct[];
  recommendedProducts: TProduct[];
  popularCategories: TCategoryWithProducts[];
  recommendedCategories: TCategoryWithProducts[];
}

export default function HomePageTemplate({
  popularProducts,
  recommendedProducts,
  popularCategories,
  recommendedCategories,
}: HomePageTemplateProps) {
  return (
    <WrapperElement className="flex flex-col gap-10">
      <NavbarModule />
      <HeaderModule />
      <CategoryRowModule
        categories={recommendedCategories}
        text="Recommended Categories"
      />
      <ProductRowModule
        products={recommendedProducts}
        text="Recommended Books"
      />
      <CategoryRowModule
        categories={popularCategories}
        text="Popular Categories"
      />
      <ProductRowModule products={popularProducts} text="Popular Books" />
      <FooterModule />
    </WrapperElement>
  );
}
