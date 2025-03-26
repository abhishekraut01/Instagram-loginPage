import { Request, Response } from "express";
import { User } from "../model/User";

export const loginController = async (req: Request, res: Response) => {
  const { username, email, phoneNumber, password } = req.body;

  try {
    // Create new user
    const newUser = new User({
      username,
      email,
      phoneNumber,
      password,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const registerController = async (req: Request, res: Response) => {
  const { username, email, phoneNumber, password } = req.body;

  try {
    // Create new user
    const newUser = new User({
      username,
      email,
      phoneNumber,
      password,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
