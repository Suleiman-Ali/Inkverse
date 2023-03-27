import Category from './category-model';
import mongoose from 'mongoose';
import _ from 'lodash';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  authorName: { type: String, required: [true, 'AuthorName is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  price: {
    type: Number,
    min: [1, 'Price must be at least 1$'],
    required: [true, 'Price is required'],
  },
  categories: {
    type: [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
    required: [true, 'Categories is required'],
  },
  images: {
    type: [String],
    required: [true, 'Images is required'],
    validate: [_.negate(_.isEmpty), 'Product must have at least 1 image'],
  },
  available: { type: Boolean, default: true },
  createdAt: { type: Number, default: Date.now },
});

ProductSchema.pre('findOneAndUpdate', function (next) {
  this.setOptions({ new: true, runValidators: true });
  next();
});

ProductSchema.pre(/^find/, function (next) {
  this.populate('categories', null, Category);
  this.select('-__v');
  next();
});

const Product =
  mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default Product;
