import NavbarModule from '../modules/common/navbar-module';
import FooterModule from '../modules/common/footer-module';
import WrapperElement from '../elements/common/wrapper-element';
import ProductsLayoutModule from '../modules/products-page-modules/products-layout-module';
import ProductsSearchModule from '../modules/products-page-modules/products-search-module';
import LayoutIconsModule from '../modules/products-page-modules/layout-icons-module';
import PaginationModule from '../modules/products-page-modules/pagination-module';
import TCategory from '../../types/category-type';
import TProduct from '../../types/product-type';
import TProductsQuery from '../../types/products-query-type';
import OptionsListModule from '../modules/products-page-modules/options-list-module';
import useLayout from '../../hooks/use-layout';
import useReactiveEffect from '../../hooks/use-reactive-effect';
import useReactiveDelayedEffect from '../../hooks/use-reactive-delayed-effect';
import useProductsQueryState from '../../hooks/use-products-query-state';
import {
  CATEGORIES_OPTIONS_MAPPER,
  PRICE_OPTIONS,
  SORT_OPTIONS,
} from '../../static-data';

interface ProductsPageTemplateProps {
  categories: TCategory[];
  products: TProduct[];
  query: TProductsQuery;
  count: number;
}

export default function ProductsPageTemplate({
  categories,
  products,
  count,
  query,
}: ProductsPageTemplateProps) {
  const { layout, layoutChangeHandler } = useLayout('grid');
  const {
    productsQuery: { name, category, price, sort, page },
    productsQueryChangeHandler,
    updatePageQuery,
  } = useProductsQueryState(query);
  useReactiveEffect(updatePageQuery, [category, price, sort, page]);
  useReactiveDelayedEffect(updatePageQuery, [name], 300);

  return (
    <WrapperElement className="flex flex-col">
      <NavbarModule />
      <WrapperElement className="max-w-6xl m-auto flex gap-10 px-3 py-32">
        <WrapperElement className="flex flex-col gap-3 relative">
          <WrapperElement className="flex flex-col gap-1">
            <LayoutIconsModule
              layout={layout}
              onChange={layoutChangeHandler}
              count={count}
            />
            <WrapperElement className="flex flex-col gap-1">
              <ProductsSearchModule
                current={name}
                onChange={productsQueryChangeHandler}
              />
              <WrapperElement className="flex flex-col sm:flex-row gap-1">
                <OptionsListModule
                  name="category"
                  items={CATEGORIES_OPTIONS_MAPPER(categories)}
                  current={category}
                  onChange={productsQueryChangeHandler}
                />
                <OptionsListModule
                  name="price"
                  items={PRICE_OPTIONS}
                  current={price}
                  onChange={productsQueryChangeHandler}
                />
                <OptionsListModule
                  name="sort"
                  items={SORT_OPTIONS}
                  current={sort}
                  onChange={productsQueryChangeHandler}
                />
              </WrapperElement>
            </WrapperElement>
          </WrapperElement>
          <ProductsLayoutModule layout={layout} products={products} />
          <PaginationModule
            limit={21}
            count={count}
            current={page}
            onChange={productsQueryChangeHandler}
          />
        </WrapperElement>
      </WrapperElement>
      <FooterModule />
    </WrapperElement>
  );
}
