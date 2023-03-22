import Product from './product-model';
import mongoose from 'mongoose';

const CartProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product is required'],
  },
  quantity: { type: Number, default: 1 },
});

CartProductSchema.pre('findOneAndUpdate', function (next) {
  this.setOptions({ new: true, runValidators: true });
  next();
});

CartProductSchema.pre(/^find/, function (next) {
  this.populate('product', null, Product);
  next();
});

const CartProduct =
  mongoose.models.CartProduct ||
  mongoose.model('CartProduct', CartProductSchema);
export default CartProduct;
