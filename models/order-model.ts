import mongoose from 'mongoose';
import { isIncludesAtLeastOne } from '../utils/helpers';

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  products: {
    type: [
      {
        product: { type: mongoose.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 },
      },
    ],
    required: [true, 'Products is required'],
    validate: [isIncludesAtLeastOne, 'Order must have at least 1 product'],
  },
});
const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);
export default Order;
