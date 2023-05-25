export default function numberToPaginationArray(n: number) {
  const array: number[] = [];
  for (let i = 1; i <= n; i++) array.push(i);
  return array;
}
