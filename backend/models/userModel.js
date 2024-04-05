import mongoose, { trusted } from "mongoose";

const userSchema=new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6
   },
   gender:{
    type: String,
    required: true,
    enum:['male','female']
   },
   profilePic:{
    type: String,
    default: ""
   }
   //createdAt,updatedAt =>Member Since 
},{timestamps: true});
const User=mongoose.model("User",userSchema);
export default User;