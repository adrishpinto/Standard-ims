import MainUser from "../models/regModel.js";

export const registerUser = async (req,res) => {
    const user = new MainUser(req.body)
    try {
        const newUser = await user.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getUser = async (req,res) => {
    try {
        const found = await MainUser.find({firstname:req.params['id']})
        res.json(found)
    } catch (error) {
        res.status(400).json({message: error.message})        
    }
}
export const getOneUser = async (req,res) => {
    try {
        const found = await MainUser.find({firstname:req.params['id']})
        res.json(found)
    } catch (error) {
        res.status(400).json({message: error.message})        
    }
}

export const getUsers = async (req,res)=>{
    try {
        const users = await MainUser.find();
        res.json(users);
    } catch (error) {
        res.status(201).json({message : error.message})
    }
}