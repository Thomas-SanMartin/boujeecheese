import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  _id: string;
  image?: string;  // Optional (for OAuth logins)
  role?: string;    // Normal user or admin
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

// Hash password before saving
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare hashed passwords
userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);
export default User;
