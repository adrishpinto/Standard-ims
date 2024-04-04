import mongoose from 'mongoose';


const OrdersPost = mongoose.Schema({
    productname:{
        type: String,
        required: true
    },
    description:{
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
    quantity:{
        type: Number,
        required:true
    },
    order_id:{
      type: String,
      required: true
    }
  });



export default mongoose.model('OrdersPost', OrdersPost);