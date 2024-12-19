const mongoose = require("mongoose");
const messageShema = new mongoose.Schema({
    Fullname :{
        type : String ,
        required : true,
    },
    Email : {
        type : String ,
        required : true,
    },
    Phone : {
        type : Number ,
        required : true,
    },
    Message : {
        type : String ,
        required : true,
    },
})
const messageModel = mongoose.model("message", messageShema)
module.exports = messageModel