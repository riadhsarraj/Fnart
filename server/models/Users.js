const mongoose = require("mongoose");
const UserShema = new mongoose.Schema({
    name :{
        type : String 
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
})

const UserModel = mongoose.model("login", UserShema)
module.exports = UserModel