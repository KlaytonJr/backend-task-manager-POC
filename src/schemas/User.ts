import { Schema, model, Document } from 'mongoose';

export interface UserInterface extends Document {
  name: string,
  email: string,
  password:string,
  creation: Date,
}

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Name required'],
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password required'],
    select: false,
  },
  creation: {
    type: Date,
    default: Date.now(),
  },
});

export default model<UserInterface>('User', UserSchema);
