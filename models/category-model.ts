import Product from './product-model';
import runValidators from './hooks/run-validators';
import deselectVProperty from './hooks/deselect-v-property';
import { Schema, models, model } from 'mongoose';

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: [true, 'Name must be unique'],
  },
});

runValidators(CategorySchema);
deselectVProperty(CategorySchema);
CategorySchema.post('findOneAndDelete', async function (doc) {
  await Product.updateMany(
    { categories: { $in: doc._id } },
    { $pull: { categories: doc._id } }
  );
});

const Category = models.Category || model('Category', CategorySchema);
export default Category;
