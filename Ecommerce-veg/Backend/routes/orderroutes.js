import express from "express"
import authMiddleware from "../middlewer/auth.js"
import { placeOrder, verifyOrders,userOrders } from "../controller/ordercontroller.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrders)
orderRouter.post("/userorders", authMiddleware,userOrders)

export default orderRouter;