import mongoose from 'mongoose';
import Product from './product-model';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: [true, 'Name must be unique'],
  },
});

CategorySchema.pre('findOneAndUpdate', function (next) {
  this.setOptions({ new: true, runValidators: true });
  next();
});

CategorySchema.pre(/^find/, function (next) {
  this.select('-__v');
  next();
});

CategorySchema.post(/^delete/, async function (doc) {
  await Product.updateMany(
    { categories: { $in: doc._id } },
    { $pull: { categories: doc._id } }
  );
});

const Category =
  mongoose.models.Category || mongoose.model('Category', CategorySchema);
export default Category;
