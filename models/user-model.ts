import validator from 'validator';
import runValidators from './hooks/run-validators';
import deselectVProperty from './hooks/deselect-v-property';
import { Schema, models, model } from 'mongoose';
import { hashPassword } from '../utils/helper-functions/password-crypt';

const UserSchema = new Schema({
  name: {
    type: String,
    unique: [true, 'Name must be unique'],
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email must be unique'],
    validate: [validator.isEmail, 'Email must be valid'],
  },
  password: {
    type: String,
    minLength: [8, 'Password must be at least 8 characters long'],
    required: [true, 'Password is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  active: { type: Boolean, default: true },
  createdAt: { type: Number, default: Date.now },
});

runValidators(UserSchema);
deselectVProperty(UserSchema);
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await hashPassword(this.password);
  next();
});

const User = models.User || model('User', UserSchema);
export default User;
