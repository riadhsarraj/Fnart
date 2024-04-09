const express = require("express");
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
app.get("/users", async (req,res)=>{
const users = await UserModel.find();
res.json(users)
})
app.post("/createUser", async (req,res)=>{
    const {name , password, email}=req.body
    const user =await UserModel.findOne({email})
    if (user){
        return res.json({message :"user already exists !"})
    }
    const hashedpassword = bcrypt.hashSync(password ,10)
    
    const newueser = new UserModel({
        name : name,
        password : hashedpassword ,
        email : email
    });
    await newueser.save();
   return  res.json({message :"user created succefully"})
})
//app.post("/login", async (req,res)=>{
  //  const {password , email} = req.body
 //   const user = await UserModel.findOne({email})
 //   !user && res.json({message : "user doesn't exist!"})
  //  const ispasswordvalid = await bcrypt.compare(password , user.password)
  //  !ispasswordvalid && res.json({message : "username or password doesn't exist!"})
  //  const token = jwt.sign({id: user._id}, process.env.SECRET )
  //  return res.json({token, userID: user._id})
//}) 

app.post("/login", async (req, res) => {
    let user = await UserModel.findOne({ email: req.body.email });
    if (user) {
        const ispasswordvalid = await bcrypt.compare(req.body.password , user.password)
      if (ispasswordvalid) {
        const token = jwt.sign({id: user._id}, process.env.SECRET )
        res.json({ success: true, token });
      } else {
        res.json({ success: false, errors: "Mot de passe incorrect" });
        console.log()
      }
    } else {
      res.json({ success: false, errors: " Email incorrect" });
    }
  });

  
app.listen("3001", ()=> {
    console.log("hello ")
});