import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    minLength: [3, "Name must contain at least 3 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minLength: [6, "Password must contain at least 6 characters."],
    select: false, // This ensures the password is not sent in responses by default
  },
  role: {
    type: String,
    required: true,
    default: "User", // Default role for new users
  },
});

// --- Hashing the Password before Saving ---
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) {
    return next();
  }
  // Hash the password with a cost factor of 10
  this.password = await bcrypt.hash(this.password, 10);
});

// --- Method to Compare Passwords ---
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// --- Method to Generate a JSON Web Token (JWT) ---
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);