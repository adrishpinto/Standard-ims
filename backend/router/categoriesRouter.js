import express from "express";
import {saveCategories, getCategories, getOneCategories, deleteCategory} from '../controllers/categoryController.js'


const categoriesRouter = express.Router();

categoriesRouter.get("/c",(req,res) => {
    res.send("categories work")
})
categoriesRouter.get("/categories",getCategories)
categoriesRouter.post("/categories",saveCategories)
categoriesRouter.get("/categories/:id", getOneCategories)
categoriesRouter.delete("/categories/:id", deleteCategory)
categoriesRouter.get("/c",(req,res) => {
    res.send("categories works")
})


export default categoriesRouter