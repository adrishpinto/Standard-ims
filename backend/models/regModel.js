import mongoose from "mongoose";
 
const MainUser = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        unique : true
    },
    mobile:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});
 
export default mongoose.model('MainUser', MainUser);