import e from "express";
import Products from "../models/productModel.js";

export const getProduct = async (req,res)=>{
    try {
        const product = await Products.find();
        res.json(product);
    } catch (error) {
        res.status(201).json({message : error.message})
    }
}

export const newProduct = async (req,res) => {
    const product = new Products(req.body)
    try {
        const newProduct = await product.save();
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteProduct = async (req,res) =>{
    try {
        const deletedProduct = await Products.deleteOne({_id:req.params.id})
        res.status(200).json(deletedProduct); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
export const productEdit = async (req,res) =>{
    try {
        const changeProduct = await Products.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(changeProduct);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
export const getOneProduct = async (req,res) =>{
    try {
        const product = await Products.findById({_id:req.params['id']})
        res.json(product)
    }
    catch{
        console.log(req.params.id);
        res.status(400).json({error: error.message})
    }
}

export const getCategory = async (req,res) =>{
    try {
        const product = await Products.find({category:req.params['id']})
        res.json(product)
    }
    catch{
        res.status(400).json({error: error.message})
    }
}