const mongoose = require("mongoose");
const chapterSchema = new mongoose.Schema(
    {
        subject:{
            type:mongoose.Schema.type.ObjectId,
            ref:"subject",
            required:true,
        },
        name:{
            type:String,
            required:true,
            trim:true,
        },
    },
    {
        timestamps:true,
    }
);
module.exports = mongoose.model("chapter",chapterSchema);