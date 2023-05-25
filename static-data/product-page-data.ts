export const RATE_OPTIONS = [
  { label: '★', value: '1' },
  { label: '★★', value: '2' },
  { label: '★★★', value: '3' },
  { label: '★★★★', value: '4' },
  { label: '★★★★★', value: '5' },
];

export const SORT_OPTIONS = [
  { label: 'Title/Asc', value: 'title,rate' },
  { label: 'Title/Desc', value: '-title,rate' },
  { label: 'Rate/Asc', value: 'rate,title' },
  { label: 'Rate/Desc', value: '-rate,title' },
  { label: 'Date/Asc', value: 'createdAt,title' },
  { label: 'Date/Desc', value: '-createdAt,title' },
];
