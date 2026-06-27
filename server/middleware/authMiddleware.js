const jwt = require("jsonwebtoken");
const User = require("../models/User");
const protect = async(req,res,next) =>{
    try{
        let token;
        //check authorization header
        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }
        //no token
        if(!token){
            return res.status(401).json({
                message:"Not authorized,tokrn missing",
            });
        }
        //verify token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        //find user
        req.user = await
        User.findById(decoded.id).select("-password");
        if(!req.user){
            return res.status(401).json({
                message:"user not found",
            });
        }
        next();
    }catch(error){
        return res.status(401).json({
            message:"invalid or expired token",
        });
    }
};
module.exports={protect};