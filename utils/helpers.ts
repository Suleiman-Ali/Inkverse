export function isIncludesAtLeastOne(val: any[]) {
  return val.length > 0;
}

export function deleteProperties(obj: any, ...args: any[]) {
  for (let arg of args) if (obj[arg]) delete obj[arg];
}
