import Product from '../models/product-model';
import manipulate from '../utils/query-manipulation';
import { NextApiRequest, NextApiResponse } from 'next';
import { successJson, failureJson } from '../utils/json';
import { uploadImages } from '../utils/image-upload';
import { deleteProperties } from '../utils/helpers';

export async function createProduct(req: any, res: NextApiResponse) {
  try {
    const { name, authorName, description, price, categories } = req.body;
    const images = await uploadImages(req.files, 'product', 'jpeg', [400, 400]);
    const product = await Product.create({
      name,
      authorName,
      description,
      price,
      images,
      categories,
    });
    res.status(201).json(successJson({ product }));
  } catch (err: any) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readProducts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [products, count] = await manipulate(
      Product.find().populate('categories'),
      req.query,
      'product'
    );
    res.status(200).json(successJson({ products, count }));
  } catch (e) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const product = await Product.findById(id).populate('categories');
    res.status(200).json(successJson({ product }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function updateProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    deleteProperties(req.body, 'images');
    const product = await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json(successJson({ product }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function deleteProduct(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json(successJson(null));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}
