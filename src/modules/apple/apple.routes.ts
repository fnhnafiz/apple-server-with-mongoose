import { Router } from "express";
import { allApples, applesFindById, createApple } from "./apple.controller";

const appleRoutes = Router();
appleRoutes.post("/create-apple", createApple);
appleRoutes.get("/apples", allApples);
appleRoutes.get("/:appleId", applesFindById);
export default appleRoutes;
