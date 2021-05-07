import connectDB from "./config/db.js";
import coffeeRoutes from "./routes/coffeeRoute.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//dotenv config
dotenv.config();

//connect database
connectDB();

const app = express();

//Creating API for coffee
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/coffee", coffeeRoutes);

const PORT = process.env.PORT || 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
