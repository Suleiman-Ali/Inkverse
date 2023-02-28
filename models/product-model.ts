import mongoose from 'mongoose';
import { isIncludesAtLeastOne } from '../utils/helpers';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  authorName: { type: String, required: [true, 'AuthorName is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  price: {
    type: Number,
    min: [1, 'Price must be at least 1$'],
    required: [true, 'Price is required'],
  },
  images: {
    type: [String],
    required: [true, 'Images is required'],
    validate: [isIncludesAtLeastOne, 'Product must have at least 1 image'],
  },
  categories: {
    type: [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
    required: [true, 'Categories is required'],
    validate: [isIncludesAtLeastOne, 'Product must have at least 1 category'],
  },
});
const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default Product;
