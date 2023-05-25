import Category from '../models/category-model';
import manipulate from '../utils/helper-functions/query-manipulation';
import json from '../utils/helper-functions/json';
import { NextApiRequest, NextApiResponse } from 'next';

export async function createCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, sub, tag } = req.body;
  const category = await Category.create({ name, sub, tag });
  res.status(201).json(json({ category }));
}

export async function readAllCategories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [categories, count] = await manipulate(
    Category.find(),
    req.query,
    'category'
  );
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
