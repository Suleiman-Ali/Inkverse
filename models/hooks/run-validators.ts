import { Schema } from 'mongoose';

export default function runValidators(schema: Schema<any>) {
  schema.pre('findOneAndUpdate', function (next) {
    this.setOptions({ new: true, runValidators: true });
    next();
  });
}
