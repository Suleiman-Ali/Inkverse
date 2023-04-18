import { useState, useEffect } from 'react';

export default function useScroll() {
  const [topOffset, setTopOffset] = useState<number>(0);
  useEffect(() => {
    const handler = () => setTopOffset(window.scrollY);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return topOffset;
}
