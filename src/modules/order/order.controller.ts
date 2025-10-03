import { Request, Response } from "express";
import Order from "./order.model";

export const createOrderApple = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    // console.log("This is come from body:", order);
    const orderApple = await Order.create(order);
    // console.log("Order apple:", orderApple);
    res.send({
      success: true,
      message: "Order successfully",
      orderApple,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Order Failed",
      error,
    });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate("apple").populate("user");
    res.send({
      success: true,
      message: "All orders here ✅",
      count: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch orders",
      error,
    });
  }
};
