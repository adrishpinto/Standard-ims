import express from "express";
import {getOneUser,registerUser,getUsers,getUser} from "../controllers/regController.js"



const regRouter = express.Router();

regRouter.get("/login",getUsers)
regRouter.get("/login/:id",getUser)
regRouter.get("/login/:id/home",getUser)
regRouter.post("/register",registerUser)
regRouter.get("/user/:id", (req,res)=>{
    res.send("welcome user " + req.params.id)
})
regRouter.get("/r",(req,res)=>{
    res.send("works");
})


export default regRouter