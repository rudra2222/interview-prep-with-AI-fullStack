const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({id : userId} , process.env.JWT_SECRET , {expiresIn : "1d"});
}


const registerUser = async(req , res) => {

  try{
    const { name , email , password , profileImageUrl} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
      return res.status(400).json({message : "User already exists"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const user = await User.create({
      name , email , password : hashedPassword ,
      profileImageUrl,
    });

    res.status(201).json({
      _id : user._id,
      name : user.name,
      email : user.email,
      profileImageUrl : user.profileImageUrl,
      token : generateToken(user._id)
    })
  }
  catch(err){
    res.status(500).json({message : "Server error" , error : err.message});
  }
};


const loginUser = async(req , res) => {
  try {
    
    const {email , password} = req.body;
    const user = await User.findOne({email});
    const isMatch = await bcrypt.compare(password , user.password);

    if(!user || !isMatch){
      return res.status(500).json({message : "Invalid email or password"});
    }

    res.json({
      _id : user._id,
      name : user.name,
      email : user.email,
      profileImageUrl : user.profileImageUrl,
      token : generateToken(user._id)
    })
    
  } catch (err) {
    res.status(500).json({message : "Server error" , error : err.message});
  }

};

const getUserProfile = async (req, res) => {
  try {
    if (!req.user) return res.status(404).json({ message: "User not found" });

    res.json(req.user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



module.exports = {registerUser , loginUser , getUserProfile};