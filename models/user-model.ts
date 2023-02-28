import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  name: {
    type: String,
    unique: [true, 'Name must be unique'],
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email must be unique'],
    validator: [validator.isEmail, 'Email must be valid'],
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
  active: {
    type: Boolean,
    default: true,
  },
});
const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
