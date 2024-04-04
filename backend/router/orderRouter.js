import express from "express";
import {saveOrder, getOrders, getOneOrder, deleteOrder} from '../controllers/orderController.js'


const orderRouter = express.Router();

orderRouter.get("/o",(req,res) => {
    res.send("orders works")
})
orderRouter.get("/orders",getOrders)
orderRouter.post("/orders", saveOrder)
orderRouter.get("/orders/:id", getOneOrder)
orderRouter.delete("/orders/:id", deleteOrder)

export default orderRouter