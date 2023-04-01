import CartProduct from './cart-product-model';
import runValidators from './hooks/run-validators';
import deselectVProperty from './hooks/deselect-v-property';
import negate from 'lodash/negate';
import isEmpty from 'lodash/isEmpty';
import { Schema, models, model, Types } from 'mongoose';

const OrderSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
  products: {
    type: [
      {
        name: { type: String, required: [true, 'Name is required'] },
        image: { type: String, required: [true, 'Image is required'] },
        price: {
          type: Number,
          min: [1, 'Price must be at least 1$'],
          required: [true, 'Price is required'],
        },
        quantity: {
          type: Number,
          default: 1,
          min: [1, 'Quantity must be at least 1'],
        },
      },
    ],
    required: [true, 'Products is required'],
    validate: [negate(isEmpty), 'Order must have at least 1 product'],
  },
  paymentId: {
    type: String,
    required: [true, 'Payment Id is required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  createdAt: { type: Number, default: Date.now },
});

runValidators(OrderSchema);
deselectVProperty(OrderSchema);
OrderSchema.post('save', async function (doc, next) {
  const { user } = doc;
  await CartProduct.deleteMany({ user });
  next();
});

const Order = models.Order || model('Order', OrderSchema);
export default Order;
