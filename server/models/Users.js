const mongoose = require("mongoose");
const UserShema = new mongoose.Schema({
    username :{
        type : String ,
        required : true,
    },
    password : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true,
        unique : true

    },
    role : {
        type : String 
        
        

    },
})



const UserModel = mongoose.model("login", UserShema)

module.exports = UserModel
