import express from "express";
import {productEdit,getCategory,deleteProduct,newProduct,getProduct,getOneProduct} from "../controllers/prodController.js"


const prodRouter = express.Router();

prodRouter.post("/products",newProduct)
prodRouter.get("/products",getProduct)
prodRouter.delete("/products/:id", deleteProduct);
prodRouter.patch("/products/:id", productEdit);
prodRouter.get("/products/:id",getOneProduct)
prodRouter.get("/category/:id",getCategory)
export default prodRouter