import User from '../models/user-model';
import { NextApiRequest, NextApiResponse } from 'next';
import { successJson, failureJson } from '../utils/json';
import { hashPassword } from '../utils/passwordCrypt';

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, password, image } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      image,
    });
    res.status(201).json(successJson({ user }));
  } catch (err: any) {
    res.status(400).json(failureJson('Could not perform operation'));
  }
}

export async function readUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await User.find();
    res.status(200).json(successJson({ users }));
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
    delete req.body?.password;
    delete req.body?.role;
    delete req.body?.active;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
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
