import constructQueryUrl from '../utils/helper-functions/construct-query-url';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function useQueryState<T>(route: string, initial: T) {
  const router = useRouter();
  const [queryState, setQueryState] = useState<T>({
    ...initial,
  });

  const queryStateChangeHandler = (key: string, value: string) => {
    setQueryState((prevState) => ({
      ...prevState,
      [key]: value,
      page: key !== 'page' ? '1' : value,
    }));
  };

  const updatePageQuery = () => {
    const url = constructQueryUrl(queryState, route);
    router.replace(url);
  };

  return {
    queryState,
    queryStateChangeHandler,
    updatePageQuery,
  };
}
