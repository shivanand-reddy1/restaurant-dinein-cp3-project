// 1. IMPORT our new sendEmail utility
import { sendEmail } from "../utils/SendEmail.js";
import { Reservation } from "../models/reservation.js";
import ErrorHandler from "../middlewares/error.js";

export const sendReservation = async (req, res, next) => {
  // 2. DESTRUCTURE 'dishes' from the request body as well
  const { firstName, lastName, email, phone, date, time, tableNumber, dishes } = req.body;

  // This validation remains the same
  if (!firstName || !lastName || !email || !phone || !date || !time || !tableNumber) {
    return next(new ErrorHandler("Please fill out the entire reservation form!", 400));
  }

  try {
    // This conflict check remains the same
    const existingReservation = await Reservation.findOne({
      tableNumber,
      date,
      time,
    });

    if (existingReservation) {
      return next(new ErrorHandler("This table is already booked for the selected date and time slot. Please choose another slot.", 400));
    }

    // 3. ADD 'dishes' to the document being created in the database
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      tableNumber,
      dishes, // Now saving the pre-ordered dishes
    });

    // 4. ADD THE EMAIL SENDING LOGIC HERE
    // We wrap this in its own try...catch block so that if the email
    // fails to send, it doesn't crash the server or send an error to the user.
    // The reservation is already successfully saved.
    try {
      const subject = "Your Reservation at Dine District is Confirmed!";
      
      // Create a nice HTML list of pre-ordered dishes, or a message if none were selected.
      const preOrderedDishesHTML = (dishes && dishes.length > 0)
        ? `<h4>Pre-ordered Dishes:</h4><ul>${dishes.map(dish => `<li>${dish}</li>`).join('')}</ul>`
        : '<p>You have not pre-ordered any dishes.</p>';

      const message = `
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 600px; margin: auto; }
            h1 { color: #333; }
            ul { list-style-type: none; padding: 0; }
            li { background: #f4f4f4; margin: 5px 0; padding: 10px; border-radius: 3px; }
            strong { color: #555; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Reservation Confirmation</h1>
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for booking a table at Dine District. Your reservation is confirmed!</p>
            <h3>Booking Details:</h3>
            <ul>
              <li><strong>Date:</strong> ${date}</li>
              <li><strong>Time Slot:</strong> ${time}</li>
              <li><strong>Table Number:</strong> ${tableNumber}</li>
              <li><strong>Contact Phone:</strong> ${phone}</li>
            </ul>
            ${preOrderedDishesHTML}
            <p>We look forward to welcoming you!</p>
            <br>
            <p>Sincerely,</p>
            <p><strong>The Dine District Team</strong></p>
          </div>
        </body>
        </html>
      `;

      await sendEmail({
        email: email, // The user's email from the form
        subject: subject,
        message: message,
      });

    } catch (emailError) {
      // Log the error for debugging, but don't stop the process
      console.error("Email could not be sent:", emailError);
    }

    // This success response to the user remains the same
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    return next(error);
  }
};