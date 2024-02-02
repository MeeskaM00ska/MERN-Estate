import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
// get info from the cookie
app.use(cookieParser());

// app.use((req, res, next) => {
//   console.log("Headers:", req.headers);
//   console.log("Body:", req.body);
//   next();
// });

app.listen(8080, () => {
  console.log("Server is running on port 8080...");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// ?
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
