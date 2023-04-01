import runValidators from './hooks/run-validators';
import deselectVProperty from './hooks/deselect-v-property';
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
  text: { type: String, required: [true, 'Text is required'] },
  rate: {
    type: Number,
    min: [1, 'Min must be at least 1'],
    max: [5, 'Max must be at most 5'],
    required: [true, 'Rate is required'],
  },
  createdAt: { type: Number, default: Date.now },
});

runValidators(ReviewSchema);
deselectVProperty(ReviewSchema);

const Review = models.Review || model('Review', ReviewSchema);
export default Review;
