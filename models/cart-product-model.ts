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

const CartProduct =
  mongoose.models.CartProduct ||
  mongoose.model('CartProduct', CartProductSchema);
export default CartProduct;
