import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import regRouter from "./router/regRouter.js";
import prodRouter from "./router/prodRouter.js"
import orderRouter from "./router/orderRouter.js";
import categoriesRouter from "./router/categoriesRouter.js";
import orderPostRouter from "./router/orderPostRouter.js"
const app = express();
mongoose.connect(
  "mongodb+srv://dbUser:1234@cluster0.ogktzwz.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection.once('open', () => console.log('Database Connected...'));;

db.on('error', (error) => console.log(error));
app.use(express.static("public"))
app.use(cors());
app.use(express.json());
app.use(orderRouter)
app.use(regRouter);
app.use(prodRouter);
app.use(categoriesRouter)
app.use(orderPostRouter)
const port = 5000;
 
app.listen(port, ()=>console.log('Server is running in port '+ port));