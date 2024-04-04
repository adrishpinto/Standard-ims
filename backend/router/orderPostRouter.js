import express from "express";
import {saveOrderPost, getOrdersPost, getOneOrderPost, deleteOrderPost} from '../controllers/ordersPostController.js'


const orderPostRouter = express.Router();

orderPostRouter.get("/o",(req,res) => {
    res.send("orders works")
})
orderPostRouter.get("/ordersPost",getOrdersPost)
orderPostRouter.post("/ordersPost", saveOrderPost)
orderPostRouter.get("/ordersPost/:id", getOneOrderPost)
orderPostRouter.delete("/ordersPost/:id", deleteOrderPost)


export default orderPostRouter