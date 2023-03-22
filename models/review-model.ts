import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
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
  text: { type: String, required: [true, 'Text is required'] },
  rate: {
    type: Number,
    min: [1, 'Min must be at least 1'],
    max: [5, 'Max must be at most 5'],
    required: [true, 'Rate is required'],
  },
  createdAt: { type: Number, default: Date.now },
});

ReviewSchema.pre('findOneAndUpdate', function (next) {
  this.setOptions({ new: true, runValidators: true });
  next();
});

const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);
export default Review;
