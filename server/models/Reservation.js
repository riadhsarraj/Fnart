const mongoose = require("mongoose");
const reservationShema = new mongoose.Schema({
    Fullname :{
        type : String ,
        required : true,
    },
    Number : {
        type : Number ,
        required : true
    },
    Cin : {
        type : Number ,
        required : true,
    },
    Email : {
        type : String ,
        required : true,
    },
    Event : {
        type : String ,
        required : true,
    },
    NumberPlaces : {
        type : Number ,
        required : true,
    },
})
const reservationModel = mongoose.model("reservation", reservationShema)
module.exports = reservationModel