import { useEffect, useRef } from 'react';

export default function useReactiveEffect(
  callback: () => void,
  dependencies: any[]
) {
  const firstMount = useRef(true);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    callback();
  }, [...dependencies]);
}
