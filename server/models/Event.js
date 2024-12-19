const mongoose = require("mongoose");
const EventShema = new mongoose.Schema({
    Title :{
        type : String ,
        required : true,
    },
    Date : {
        type : String ,
        required : true
    },
    Link : {
        type : String ,
        required : true,       
    },   
})
const EventModel = mongoose.model("Event", EventShema)
module.exports = EventModel