const User = require("../models/user");
const bcrypt = require("bcryptjs");

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
        const User = await user.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        res.status(201).json({
            message:"user registerd successfully",
            user,
        });

    }catch(error){
        res.status(500).json({
            message:error.massage,
        });
    }
};

module.exports = {
    registerUser,
};