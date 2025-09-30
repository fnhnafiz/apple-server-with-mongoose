import { Router } from "express";
import { getAllUsers, registerUser } from "./user.controller";

const userRoute = Router();
userRoute.post("/create-user", registerUser);
userRoute.get("/users", getAllUsers);

export default userRoute;
