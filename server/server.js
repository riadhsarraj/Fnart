const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const username = process.env.USERNAME,
password = process.env.PASSWORD,
database =process.env.DATABASE;
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.wmqjbq9.mongodb.net/${database}?retryWrites=true&w=majority`);
const UserModel =require('./models/Users');
const galleryModel =require('./models/Gallery');
const reservationModel =require('./models/Reservation');
const EventModel =require('./models/Event');
const messageModel =require('./models/Message');
const multer = require("multer");
const path = require('path');
const storage = multer.diskStorage({
  destination: "./uploadImages",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
app.use("/uploadImages", express.static("uploadImages"));
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:3001/uploadImages/${req.file.filename}`,
  });
});

app.get("/users", async (req,res)=>{
const users = await UserModel.find();
res.json(users)
})

app.post("/createUser", async (req,res)=>{
    const {username , password, email}=req.body
    const user =await UserModel.findOne({email})
    
    if (user){
        return res.json({message :"user already exists !"})
    }
    const hashedpassword = bcrypt.hashSync(password ,10)
    
    const newueser = new UserModel({
        username : username,
        password : hashedpassword ,
        email : emailqa
        
    });
    await newueser.save();
   return  res.json({message :"user created succefully"})
})

app.post("/login", async (req, res) => {
    let user = await UserModel.findOne({ email: req.body.email });
    
    if (user) {
        const ispasswordvalid = await bcrypt.compare(req.body.password , user.password)
      if (ispasswordvalid) {
        const token = jwt.sign({id: user._id}, process.env.SECRET )
        const role = user.role
        res.json({ success: true, token , role });
        
      } else {
        res.json({ success: false, errors: "Email ou Mot de passe incorrect" });
        console.log()
      }
    } else {
      res.json({ success: false, errors: " Email ou Mot de passe incorrect" });
    }
});

app.get("/allusers", async (req, res) => {
    try {
        const allusers = await UserModel.find({ role: { $ne: "admin" } });
        res.json({ success: true, data: allusers });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Erreur",
            error: error.message,
        });
    }
});

app.delete("/deleteuser/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await UserModel.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "user not found" });
      }
      res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
});
  
app.post("/creategallery", async (req,res)=>{
  console.log(req.body)
    const {Fullname , Space, Description , date ,photo}=req.body
    const newgallery = new galleryModel({
      Fullname : Fullname,
      Space : Space ,
      Description : Description,
      date :date ,
      photo :photo,
        
    });
    await newgallery.save();
   return  res.json({message :"gallery created succefully"})
})

app.post("/createreservation", async (req,res)=>{
  const {Fullname , Number, Cin , Email ,Event,NumberPlaces}= req.body
  const newreservation = new reservationModel({
    Fullname : Fullname,
    Number : Number ,
    Cin : Cin,
    Email :Email ,
    Event :Event,
    NumberPlaces :NumberPlaces
      
  });
  await newreservation.save();
 return  res.json({message :"Reservation succefully"})
})

app.get("/allreservation", async (req, res) => {
  try {
      const allreservation = await reservationModel.find();
      res.json({ success: true, data: allreservation });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: "Erreur ",
          error: error.message,
      });
  }
});

app.delete("/deletereservation/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletereservation = await reservationModel.findByIdAndDelete(id);
    if (!deletereservation) {
      return res.status(404).json({ message: "reservation not found" });
    }
    res.status(200).json({ message: "reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting reservation", error });
  }
});

app.post("/createEvent", async (req,res)=>{
  const {Title , Date, Link }=req.body
  const newEvent = new EventModel({
    Title : Title,
    Date : Date ,
    Link : Link,   
  });
  await newEvent.save();
 return  res.json({message :"Event created succefully"})
})

app.get("/allEvents", async (req, res) => {
  try {
      const allEvents = await EventModel.find({});
      res.json({ success: true, data: allEvents });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: "Erreur",
          error: error.message,
      });
  }
});

app.delete("/DeleteEvent/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const DeleteEvent = await EventModel.findByIdAndDelete(id);
    if (!DeleteEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Event", error });
  }
});

app.post("/createMessage", async (req,res)=>{
  const {Fullname ,Email ,Phone,Message}= req.body
  const newMessage = new messageModel({
    Fullname : Fullname,
    Email :Email ,
    Phone :Phone,
    Message :Message
      
  });
  await newMessage.save();
 return  res.json({message :"Message succefully"})
})

app.get("/allmessage", async (req, res) => {
  try {
      const allmessage = await messageModel.find();
      res.json({ success: true, data: allmessage });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: "Erreur",
          error: error.message,
      });
  }
});

app.get("/allGallery", async (req, res) => {
  try {
      const allGallery = await galleryModel.find({});
      res.json({ success: true, data: allGallery });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: "Erreur",
          error: error.message,
      });
  }
});

app.get("/allAccepted", async (req, res) => {
  try {
      const allGallery = await galleryModel.find({accord : true});
      res.json({ success: true, data: allGallery });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: "Erreur",
          error: error.message,
      });
  }
});

app.get("/totalPlaces/:event", async (req, res) => {
  try {
    const { event } = req.params;
    const totalPlaces = await reservationModel.aggregate([
      { $match: { Event: event } },
      { $group: { _id: null, totalReservedPlaces: { $sum: "$NumberPlaces" } } }
    ]);

    const totalReservedPlaces = totalPlaces.length > 0 ? totalPlaces[0].totalReservedPlaces : 0;
    res.json({ totalReservedPlaces });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération du nombre total de places réservées", error: error.message });
  }
});

app.delete("/DeleteGallery/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const DeleteGallery = await galleryModel.findByIdAndDelete(id);
    if (!DeleteGallery) {
      return res.status(404).json({ message: "Gallery not found" });
    }
    res.status(200).json({ message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting Gallery", error });
  }
});

app.put('/updateGallery/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { accord } = req.body;
    const updatedGallery = await galleryModel.findByIdAndUpdate(id, { accord }, { new: true });
    res.status(200).json(updatedGallery);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la galerie' });
  }
});

app.listen("3001", ()=> {
    console.log("en marche ")

});