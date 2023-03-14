import Category from '../models/category-model';
import manipulate from '../utils/query-manipulation';
import { NextApiRequest, NextApiResponse } from 'next';
import { failureJson, successJson } from '../utils/json';

export async function createCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json(successJson({ category }));
  } catch (err: any) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readCategories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [categories, count] = await manipulate(Category.find(), req.query);
    res.status(200).json(successJson({ categories, count }));
  } catch (e) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function updateCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const category = await Category.findByIdAndUpdate(id, req.body);
    res.status(200).json(successJson({ category }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function deleteCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const category = await Category.findByIdAndDelete(id);
    res.status(200).json(successJson(null));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}
