import { Model, Schema } from 'mongoose';

export default function populateProperty(
  schema: Schema<any>,
  path: string,
  model: Model<any>
) {
  schema.pre(/^find/, function (next) {
    this.populate(path, null, model);
    next();
  });
}
