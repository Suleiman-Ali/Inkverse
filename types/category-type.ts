type TCategory = {
  _id: string;
  name: string;
  sub: string;
  tag: 'none' | 'popular' | 'recommended';
};

export default TCategory;
