import { Router } from "express";
import {
  allApples,
  applesFindById,
  createApple,
  detetedApple,
  updatedApple,
} from "./apple.controller";

const appleRoutes = Router();
appleRoutes.post("/create-apple", createApple);
appleRoutes.get("/apples", allApples);
appleRoutes.get("/:appleId", applesFindById);
appleRoutes.patch("/:appleId", updatedApple);
appleRoutes.delete("/:appleId", detetedApple);
export default appleRoutes;
