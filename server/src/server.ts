import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb";

dotenv.config();

connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import AuthRouter from './routes/auth.routes'

app.use('/api/v1/auth' , AuthRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
