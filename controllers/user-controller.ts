import User from '../models/user-model';
import manipulate from '../utils/query-manipulation';
import { hashPassword } from '../utils/password-crypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { successJson, failureJson } from '../utils/json';
import { uploadImage } from '../utils/image-upload';
import { deleteProperties } from '../utils/helpers';

export async function createUser(req: any, res: NextApiResponse) {
  try {
    const { name, email, password: originalPassword } = req.body;
    const image = await uploadImage(req.file, 'user', 'png', [100, 100]);
    const password = await hashPassword(originalPassword);
    const user = await User.create({ name, email, password, image });
    res.status(201).json(successJson({ user }));
  } catch (err: any) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [users, count] = await manipulate(User.find(), req.query, 'user');
    res.status(200).json(successJson({ users, count }));
  } catch (e) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const user = await User.findById(id);
    res.status(200).json(successJson({ user }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    deleteProperties(req.body, 'password', 'role', 'active', 'image');
    const user = await User.findByIdAndUpdate(id, req.body);
    res.status(200).json(successJson({ user }));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const user = await User.findByIdAndUpdate(id, { active: false });
    res.status(200).json(successJson(null));
  } catch (err) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}
