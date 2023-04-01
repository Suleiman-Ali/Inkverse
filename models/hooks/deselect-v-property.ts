import { Schema } from 'mongoose';

export default function deselectVProperty(schema: Schema<any>) {
  schema.pre(/^find/, function (next) {
    this.select('-__v');
    next();
  });
}
