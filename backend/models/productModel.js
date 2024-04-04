import mongoose from "mongoose";
 
const Products = mongoose.Schema({
    productname:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    product_Id:{
        type:String,
        required: true
    },
    quantity:{
        type: Number,
        required:true
    }
});
 
export default mongoose.model('Products', Products);