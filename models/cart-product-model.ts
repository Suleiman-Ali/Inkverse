import Product from './product-model';
import runValidators from './hooks/run-validators';
import deselectVProperty from './hooks/deselect-v-property';
import { Schema, models, model, Types } from 'mongoose';

const CartProductSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  product: {
    type: Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product is required'],
  },
  quantity: {
    type: Number,
    default: 1,
    min: [1, 'Quantity must be at least 1'],
  },
});

runValidators(CartProductSchema);
deselectVProperty(CartProductSchema);
CartProductSchema.pre(/^find/, function (next) {
  const included = Object.keys((this as any)._fields).includes('product');
  if (!included) return next();
  this.populate('product', null, Product);
  next();
});

const CartProduct =
  models.CartProduct || model('CartProduct', CartProductSchema);

export default CartProduct;
