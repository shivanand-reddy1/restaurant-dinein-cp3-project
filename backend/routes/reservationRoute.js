import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

// When a POST request is made to the root URL of this router ('/'),
// it will be handled by the sendReservation function from our controller.
router.post("/send", sendReservation);

export default router;