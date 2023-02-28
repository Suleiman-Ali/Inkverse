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
});
const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);
export default Review;
