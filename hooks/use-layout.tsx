import { useState } from 'react';

export default function useLayout(initial: 'grid' | 'list') {
  const [layout, setLayout] = useState(initial);
  const layoutChangeHandler = (layout: 'grid' | 'list') => setLayout(layout);
  return { layout, layoutChangeHandler };
}
