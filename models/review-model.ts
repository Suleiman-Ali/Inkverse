import runValidators from './hooks/run-validators';
import deselectVProperty from './hooks/deselect-v-property';
import User from './user-model';
import { Schema, models, model, Types } from 'mongoose';

const ReviewSchema = new Schema({
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
  title: { type: String, required: [true, 'Title is required'] },
  text: { type: String, required: [true, 'Text is required'] },
  rate: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: [true, 'Rate is required'],
  },
  createdAt: { type: Number, default: Date.now },
});

runValidators(ReviewSchema);
deselectVProperty(ReviewSchema);
ReviewSchema.pre(/^find/, function (next) {
  const included = Object.keys((this as any)._fields).includes('user');
  if (!included) return next();
  this.populate('user', null, User);
  next();
});

const Review = models.Review || model('Review', ReviewSchema);
export default Review;
