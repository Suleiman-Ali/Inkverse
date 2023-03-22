import Category from '../models/category-model';
import manipulate from '../utils/query-manipulation';
import json from '../utils/json';
import { NextApiRequest, NextApiResponse } from 'next';

export async function createCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.body;
  const category = await Category.create({ name });
  res.status(201).json(json({ category }));
}

export async function readCategories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [categories, count] = await manipulate(Category.find(), req.query);
  res.status(200).json(json({ categories, count }));
}

export async function updateCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const category = await Category.findByIdAndUpdate(id, req.body);
  res.status(200).json(json({ category }));
}

export async function deleteCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const category = await Category.findByIdAndDelete(id);
  res.status(200).json(json({}));
}
