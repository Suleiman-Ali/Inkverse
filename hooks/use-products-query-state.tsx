import TProductsQuery from '../types/products-query-type';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { constructQueryUrl } from '../utils/helper-functions';

export default function useProductsQueryState(query: TProductsQuery) {
  const router = useRouter();
  const [productsQuery, setProductsQuery] = useState<TProductsQuery>({
    category: query.category || '',
    price: query.price || '',
    sort: query.sort || '',
    name: query.name || '',
    page: query.page || '1',
  });

  const productsQueryChangeHandler = (key: string, value: string) => {
    setProductsQuery((prevState) => ({
      ...prevState,
      [key]: value,
      page: key !== 'page' ? '1' : value,
    }));
  };

  const updatePageQuery = () => {
    const url = constructQueryUrl(productsQuery);
    router.replace(url);
  };

  return {
    productsQuery,
    productsQueryChangeHandler,
    updatePageQuery,
  };
}
