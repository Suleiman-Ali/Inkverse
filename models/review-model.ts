import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  text: { type: String, required: [true, 'Text is required'] },
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
  rate: {
    type: Number,
    min: [0, 'Min must be at least 0'],
    max: [5, 'Max must be at most 5'],
    required: [true, 'Rate is required'],
  },
});
const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);
export default Review;
