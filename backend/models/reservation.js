import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    trim: true,
    minLength: [3, "First name must contain at least 3 characters."],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
    trim: true,
    minLength: [3, "Last name must contain at least 3 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    //unique: true,
    validate: [validator.isEmail, "Please provide a valid email address."],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required."],
    minLength: [10, "Phone number must contain at least 10 digits."],
    maxLength: [10, "Phone number must contain at most 10 digits."],
  },
  date: {
    type: String, // Storing as string in "YYYY-MM-DD" format for simplicity
    required: [true, "Reservation date is required."],
  },
  time: {
    type: String, // e.g., "18:00", "19:30"
    required: [true, "Reservation time is required."],
  },
  tableNumber: {
    type: Number,
    required: [true, "Table number is required."],
    min: [1, "Table number must be at least 1."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);