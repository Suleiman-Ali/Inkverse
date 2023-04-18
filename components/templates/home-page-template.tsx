import NavbarModule from '../modules/navbar-module';
import HeaderModule from '../modules/header-module';
import CategoryRowModule from '../modules/category-row-module';
import ProductRowModule from '../modules/product-row-module';
import FooterModule from '../modules/footer-module';
import TCategoryWithProducts from '../../types/category-with-products-type';
import TProduct from '../../types/product-type';

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
    <div className="w-full flex flex-col gap-10">
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
    </div>
  );
}
