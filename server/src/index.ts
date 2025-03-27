import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import { connectDb } from "./db/connectDb";

dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import AuthRouter from "./routes/auth.routes";
import { errorHandler } from "./middleware/globelerrorhandler";

app.use("/api/v1/auth", AuthRouter);

app.use(errorHandler);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 😎😎😎`);
    });
  })
  .catch(() => {
    console.log(`something went wrong while connecting to databse`);
  });
