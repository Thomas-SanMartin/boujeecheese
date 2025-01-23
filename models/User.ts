import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  _id: string;
  image?: string;  // Optional for OAuth users
  role?: string;    // User roles (admin, user, etc.)
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

// Hash password before saving (for email/password authentication)
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();

  console.log("🔍 Raw Password Before Hashing:", this.password);

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  console.log("🔍 Hashed Password Before Storing:", this.password);

  next();
});

// Compare password for login authentication
UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
