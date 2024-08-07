import express from "express"
import { addTocart,removeFromcart, getCart } from "../controller/cartController.js"
import authMiddleware from "../middlewer/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addTocart)
cartRouter.post("/remove",authMiddleware, removeFromcart)
cartRouter.post("/get", authMiddleware, getCart)

export default cartRouter;