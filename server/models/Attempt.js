const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        question:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Question",
            required:true,
        },
        selectedAnswer:{
            type:Number,
            required:true,
        },
        isCorrect:{
            type:Boolean,
            required:true,
        },
    },
    {
        timestamps:true,
    }
);
module.exports = mongoose.model("Attempt",attemptSchema);