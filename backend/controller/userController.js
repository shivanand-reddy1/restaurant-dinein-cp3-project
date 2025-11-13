import { User } from "../models/user.js";
import ErrorHandler from "../middlewares/error.js";

// A utility function to send the token in a cookie
const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Makes the cookie inaccessible to client-side JS
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};

// --- 1. USER REGISTRATION ---
export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password) {
    return next(new ErrorHandler("Please fill out the entire form!", 400));
  }

  // Check if user already exists
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("User already exists with this email.", 400));
  }

  // Create the new user
  try {
    const user = await User.create({
      name,
      email,
      password,
      role: "User", // Default role
    });
    sendToken(user, 201, res, "User Registered Successfully!");
  } catch (error) {
    return next(error);
  }
};

// --- 2. USER LOGIN ---
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return next(new ErrorHandler("Please provide both email and password!", 400));
  }

  // Find user by email, and explicitly include the password for comparison
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password.", 401));
  }

  // Compare the entered password with the stored hashed password
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password.", 401)); // Use a generic message for security
  }

  sendToken(user, 200, res, "User Logged In Successfully!");
};

// --- 3. USER LOGOUT ---
export const logout = async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", { // Clear the token cookie
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User Logged Out Successfully.",
    });
};