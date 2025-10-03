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
    const apple = await Apple.find({});
    res.send({
      success: true,
      message: "Here is all apple🍎",
      apple: apple,
    });
  } catch (error) {
    res.send({
      success: false,
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

export const updatedApple = async (req: Request, res: Response) => {
  try {
    const appleId = req.params.appleId;
    const bodyData = req.body;
    const updatedApple = await Apple.findByIdAndUpdate(appleId, bodyData, {
      new: true,
      runValidators: true, //This is for re validator when updated new
    });
    res.send({
      success: true,
      message: "Updated Successfully apple 🍎 ✅",
      updatedApple,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Updated failed",
      error,
    });
  }
};

export const detetedApple = async (req: Request, res: Response) => {
  try {
    const appleId = req.params.appleId;
    const deletedApp = await Apple.findByIdAndDelete(appleId);
    res.send({
      success: true,
      message: "Apple deleted successfully 🍎 ✅",
      deletedApp,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Deteted failed",
      error,
    });
  }
};
