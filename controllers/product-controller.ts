import Product from '../models/product-model';
import manipulate from '../utils/query-manipulation';
import json from '../utils/json';
import { NextApiRequest, NextApiResponse } from 'next';
import { uploadImages } from '../lib/upload-image';

export async function createProduct(req: any, res: NextApiResponse) {
  const { name, authorName, description, price, categories, tag } = req.body;
  const images = await uploadImages(req.files, 'product', 'jpeg', [325, 475]);
  const product = await Product.create({
    name,
    authorName,
    description,
    price,
    images,
    categories,
    tag,
  });
  res.status(201).json(json({ product }));
}

export async function readAllProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [products, count] = await manipulate(
    Product.find(),
    req.query,
    'product'
  );
  res.status(200).json(json({ products, count }));
}

export async function readProduct(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = await Product.findById(id);
  res.status(200).json(json({ product }));
}

export async function updateProduct(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = await Product.findByIdAndUpdate(id, req.body);
  res.status(200).json(json({ product }));
}

export async function deleteProduct(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = await Product.findByIdAndDelete(id);
  res.status(200).json(json({}));
}
