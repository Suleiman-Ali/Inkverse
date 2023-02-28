import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: [true, 'Name must be unique'],
  },
});
const Category =
  mongoose.models.Category || mongoose.model('Category', CategorySchema);
export default Category;
