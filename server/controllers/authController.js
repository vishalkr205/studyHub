const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async(req,res) => {
    try{
        const {name,email,password,role} = req.body;
        //validation
        if(!name || !email || !password){
            return res.status(400).json({
                message:"please fill all required options",
            });
        }
        //check existing user
        const existingUSer = await User.findOne({ email });

        if(existingUSer){
            return res.status(400).json({
                message:"user already exist",
            });
        }
        //hash password
        const hashedPassword = await bcrypt.hash(password,10);

        //save user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        const token = jwt.sign(
            {
                id:user._id,
                role:user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"7d",
            }
        );
        user.password=undefined;
        res.status(201).json({
            message:"user registerd successfully",
            token,
            user,
        });

    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};

const loginUser =async(req,res) =>{
    try{
        const{email,password}=req.body;
        //validation
        if(!email||!password){
            return res.status(400).json({
                message:"please provide email and password",
            });
        }
        //check user
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"invalid email or password"
            });
        }
        //compare password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                message:"invalid email or password"
            });
        }
        const token = jwt.sign(
            {
                id:user._id,
                role:user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"7d",
            }
        );
        user.password = undefined;
        res.status(200).json({
            message:"login successful",
            token,
            user,
        });
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};
module.exports = {
    registerUser,
    loginUser
};