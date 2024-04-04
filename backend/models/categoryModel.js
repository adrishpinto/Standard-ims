import mongoose from 'mongoose';


const Categories = mongoose.Schema({
  category_id:{
    type: String,
    required : true 
  },
  product_id:{
    type: String,
    required : true 
  },
  category_name:{
    type: String,
    required : true 
  }
});



export default mongoose.model('Categories', Categories);