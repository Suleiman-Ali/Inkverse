import Category from './category-model';
import CartProduct from './cart-product-model';
import Review from './review-model';
import runValidators from './hooks/run-validators';
import deselectVProperty from './hooks/deselect-v-property';
import negate from 'lodash/negate';
import isEmpty from 'lodash/isEmpty';
import { Schema, models, model, Types } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  authorName: { type: String, required: [true, 'AuthorName is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  price: {
    type: Number,
    min: [1, 'Price must be at least 1$'],
    required: [true, 'Price is required'],
  },
  categories: {
    type: [{ type: Types.ObjectId, ref: 'Category' }],
    required: [true, 'Categories is required'],
  },
  images: {
    type: [String],
    required: [true, 'Images is required'],
    validate: [negate(isEmpty), 'Product must have at least 1 image'],
  },
  tag: {
    type: String,
    default: 'none',
    enum: ['none', 'popular', 'recommended'],
  },
  publicationDate: {
    type: String,
    required: [true, 'PublicationDate is required'],
  },
  createdAt: { type: Number, default: Date.now },
});

runValidators(ProductSchema);
deselectVProperty(ProductSchema);
ProductSchema.pre(/^find/, function (next) {
  const included = Object.keys((this as any)._fields).includes('categories');
  if (!included) return next();
  this.populate('categories', null, Category);
  next();
});
ProductSchema.post('findOneAndDelete', async function (doc, next) {
  const { _id: product } = doc;
  await Promise.all([
    CartProduct.deleteMany({ product }),
    Review.deleteMany({ product }),
  ]);
  next();
});

const Product = models.Product || model('Product', ProductSchema);
export default Product;
