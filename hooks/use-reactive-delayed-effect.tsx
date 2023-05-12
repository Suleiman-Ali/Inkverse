import { useEffect, useRef } from 'react';

export default function useReactiveDelayedEffect(
  callback: () => void,
  dependencies: any[],
  delay: number
) {
  const firstMount = useRef(true);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    const id = setTimeout(callback, delay);
    return () => clearTimeout(id);
  }, [...dependencies]);
}
