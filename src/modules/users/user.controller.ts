import { Request, Response } from "express";
import User from "./user.model";

export const registerUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  const user = new User(newUser);
  // console.log(user);
  const data = await user.save();
  res.send({
    success: true,
    message: "User Registered Succefully✅",
    data,
  });
};

export const getAllUsers = async (req: Request, res: Response) => {
  const allUsers = await User.find();
  res.send({
    success: true,
    message: "Here is show all users data Succefully✅",
    UsersData: allUsers,
  });
};
