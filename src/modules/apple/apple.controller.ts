import { Request, Response } from "express";
import { Apple } from "./apple.model";

export const createApple = async (req: Request, res: Response) => {
  try {
    const bodyApple = req.body;
    const newApple = await Apple.create(bodyApple);
    res.send({
      success: true,
      message: "Apple created successfully✅",
      newApple: newApple,
    });
  } catch (error) {
    console.error(error);
  }
};

export const allApples = async (req: Request, res: Response) => {
  try {
    const apple = await Apple.find();
    res.send({
      success: true,
      message: "Here is all apple🍎",
      apple: apple,
    });
  } catch (error) {
    res.send({
      success: true,
      message: "Error from get apples",
      error,
    });
  }
};
export const applesFindById = async (req: Request, res: Response) => {
  const appleId = req.params.appleId;
  const apple = await Apple.findById(appleId);
  res.send({
    success: true,
    message: "Here is your apple🍎",
    apple,
  });
};
