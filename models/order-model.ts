import Product from './product-model';
import mongoose from 'mongoose';
import CartProduct from './cart-product-model';
import _ from 'lodash';
import { filterUnavailableCartProducts } from '../utils/helper-functions';

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

OrderSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'products',
    populate: { path: 'product', model: Product },
  });
  this.select('-__v');
  next();
});

OrderSchema.post(/^save/, async function (doc) {
  const cartProducts = await CartProduct.find({ user: doc.user });
  const cartProductIds = filterUnavailableCartProducts(cartProducts).map(
    (cartProduct) => cartProduct._id
  );
  if (cartProductIds.length > 0)
    await CartProduct.deleteMany({ _id: { $in: cartProductIds } });
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);
export default Order;
