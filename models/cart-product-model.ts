import Product from './product-model';
import runValidators from './hooks/run-validators';
import deselectVProperty from './hooks/deselect-v-property';
import populateProperty from './hooks/populate-property';
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
populateProperty(CartProductSchema, 'product', Product);

const CartProduct =
  models.CartProduct || model('CartProduct', CartProductSchema);

export default CartProduct;
