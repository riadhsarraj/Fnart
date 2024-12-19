const mongoose = require("mongoose");
const galleryShema = new mongoose.Schema({
    Fullname :{
        type : String ,
        required : true,
    },
    Space : {
        type : String ,
        required : true
    },
    Description : {
        type : String ,
        required : true,
    },
    date : {
        type : String 
    },
    photo : {
        type : String 
    },
    accord : {
        type : Boolean ,
        default : false

    },

})
const galleryModel = mongoose.model("gallery", galleryShema)
module.exports = galleryModel