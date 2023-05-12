import TCategory from '../types/category-type';

export const PRICE_OPTIONS = [
  { label: '00$ - 10$', value: '0,10' },
  { label: '10$ - 15$', value: '10,15' },
  { label: '15$ - 20$', value: '15,20' },
  { label: '20$ - 50$', value: '20,50' },
  { label: '50$ - 100$', value: '50,100' },
];

export const SORT_OPTIONS = [
  { label: 'Name/Asc', value: 'name' },
  { label: 'Name/Desc', value: '-name' },
  { label: 'Price/Asc', value: 'price,name' },
  { label: 'Price/Desc', value: '-price,name' },
];

export const CATEGORIES_OPTIONS_MAPPER = (categories: TCategory[]) =>
  categories.map(({ name, _id }) => ({
    label: name,
    value: _id,
  }));
