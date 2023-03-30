import mongoose from 'mongoose';
import _ from 'lodash';
import CartProduct from './cart-product-model';

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
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
    validate: [_.negate(_.isEmpty), 'Order must have at least 1 product'],
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

OrderSchema.post('save', async function (doc, next) {
  const { user } = doc;
  const cartProducts = await CartProduct.deleteMany({ user });
  next();
});

OrderSchema.pre(/^find/, function (next) {
  this.select('-__v');
  next();
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);
export default Order;
