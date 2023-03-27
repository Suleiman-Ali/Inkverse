import { Query } from 'mongoose';

function filterQuery(filter: any, query: Query<any, any>) {
  if (!filter || Object.keys(filter).length <= 0) return query;
  return query.find(filter);
}

function countQuery(query: Query<any, any>) {
  return query.model.find(query.getFilter()).countDocuments();
}

function sortQuery(sort: string, query: Query<any, any>) {
  if (!sort) return query;
  return query.sort(sort);
}

function fieldLimitQuery(fields: string, query: Query<any, any>) {
  if (!fields) return query.select('-__v');
  return query.select(fields.split(',').join(' '));
}

function paginateQuery(page: number, limit: number, query: Query<any, any>) {
  const pageCalc = !page || page <= 0 ? 1 : page;
  const limitCalc = !limit || limit <= 0 ? 20 : limit;
  const skip = (pageCalc - 1) * limitCalc;
  return query.skip(skip).limit(limitCalc);
}

export default async function manipulate(
  inputQuery: Query<any, any>,
  queryObj: any,
  type?: string
) {
  const { sort, fields, page, limit } = queryObj;
  let query = inputQuery;
  let count: any;
  let filter: any = {};

  if (type === 'product') {
    const { name, category, minPrice, maxPrice } = queryObj;
    if (name) filter.name = new RegExp(name, 'i');
    if (category) filter.categories = { $in: category };
    if (minPrice && maxPrice) filter.price = { $gte: minPrice, $lte: maxPrice };
  } else if (type === 'user') {
    const { name, email, role, active } = queryObj;
    if (name) filter.name = new RegExp(name, 'i');
    if (email) filter.email = new RegExp(email, 'i');
    if (role) filter.role = { $eq: role };
    if (active) filter.active = { $eq: active };
  } else if (type === 'review') {
    const { rate } = queryObj;
    if (rate) filter.rate = { $eq: rate };
  } else if (type === 'cartProduct') {
    const { minQuantity, maxQuantity } = queryObj;
    if (minQuantity && maxQuantity)
      filter.quantity = { $gte: minQuantity, $lte: maxQuantity };
  } else if (type === 'order') {
    const { minAmount, maxAmount } = queryObj;
    if (minAmount && maxAmount)
      filter.amount = { $gte: minAmount, $lte: maxAmount };
  }

  query = filterQuery(filter, inputQuery);
  count = countQuery(query);
  query = sortQuery(sort, query);
  query = fieldLimitQuery(fields, query);
  query = paginateQuery(page, limit, query);
  return [await query, await count];
}
