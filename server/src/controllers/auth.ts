import { Request, Response } from "express";
import { User } from "../model/User";
import { z } from "zod";

const userSchema = z.object({
  loginInput: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const loginController = async (
  req: Request,
  res: Response,
  next: (err?: any) => void
): Promise<void> => {
  try {
    const validatedData = userSchema.parse(req.body);

    const newUser = new User(validatedData);
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id,
    });
  } catch (error) {
    next(error);
  }
};

export const registerController = async (
  req: Request,
  res: Response,
  next: (err?: any) => void
): Promise<void> => {
  try {
    const validatedData = userSchema.parse(req.body);

    const newUser = new User(validatedData);
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id,
    });
  } catch (error) {
    next(error);
  }
};
