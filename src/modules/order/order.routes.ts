import { Router } from "express";
import { createOrderApple, getAllOrders } from "./order.controller";

const orderRoutes = Router();

orderRoutes.post("/create-order", createOrderApple);
orderRoutes.get("/orders", getAllOrders);

export default orderRoutes;
