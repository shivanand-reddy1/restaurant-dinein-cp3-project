import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import userRouter from "./routes/userRouter.js"; // <--- 1. IMPORT THE NEW ROUTER
import cookieParser from "cookie-parser"; // <--- 2. IMPORT COOKIE PARSER

const app = express();
dotenv.config({ path: "./config.env" });

// --- Middlewares ---
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET"], // <--- 3. ADD 'GET' TO METHODS
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // <--- 4. USE THE COOKIE PARSER MIDDLEWARE

// --- Routes ---
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/user", userRouter); // <--- 5. MOUNT THE NEW USER ROUTER

// --- Database Connection ---
dbConnection();

// --- Error Handling Middleware ---
app.use(errorMiddleware);

export default app;