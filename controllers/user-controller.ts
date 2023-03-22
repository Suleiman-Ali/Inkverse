import User from '../models/user-model';
import manipulate from '../utils/query-manipulation';
import json from '../utils/json';
import { hashPassword } from '../utils/password-crypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { uploadImage } from '../lib/image-upload';

export async function createUser(req: any, res: NextApiResponse) {
  const { name, email, password: originalPassword } = req.body;
  const image = await uploadImage(req.file, 'user', 'png', [100, 100]);
  const password = await hashPassword(originalPassword);
  const user = await User.create({ name, email, password, image });
  res.status(201).json(json({ user }));
}

export async function readUsers(req: NextApiRequest, res: NextApiResponse) {
  const [users, count] = await manipulate(User.find(), req.query, 'user');
  res.status(200).json(json({ users, count }));
}

export async function readUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const user = await User.findById(id);
  res.status(200).json(json({ user }));
}

export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const user = await User.findByIdAndUpdate(id, req.body);
  res.status(200).json(json({ user }));
}

export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const user = await User.findByIdAndUpdate(id, { active: false });
  res.status(200).json(json({}));
}
