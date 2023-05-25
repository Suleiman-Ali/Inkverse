export default function constructQueryUrl(queryObj: any, route: string) {
  const query = { ...queryObj };
  const str = Object.keys(query)
    .filter((key) => query[key] && (key !== 'page' || +query[key] !== 1))
    .map((key) => `${key}=${query[key]}`)
    .join('&');
  if (!str) return route;
  return `${route}?${str}`;
}
