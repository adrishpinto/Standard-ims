import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import regRouter from "./router/regRouter.js";
import prodRouter from "./router/prodRouter.js"
import orderRouter from "./router/orderRouter.js";
import categoriesRouter from "./router/categoriesRouter.js";
import orderPostRouter from "./router/orderPostRouter.js"
import dotenv from 'dotenv';
dotenv.config();

const app = express();
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection.once('open', () => console.log('Database Connected...'));;
const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}
db.on('error', (error) => console.log(error));
app.use(express.static("public"))
app.use(cors(corsOptions));
app.use(express.json());
app.use(orderRouter)
app.use(regRouter);
app.use(prodRouter);
app.use(categoriesRouter)
app.use(orderPostRouter)
const port = process.env.PORT;
 
app.listen(port, ()=>console.log('Server is running in port '+ port));