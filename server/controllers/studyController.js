const Subject = require("../models/Subject");
const Chapter = require("../models/Chapter");
const Note = require("../models/Note");
//get subjects
const getSubjects = async(req,res)=>{
    const subjects = await Subject.find();
    res.status(200).json(subjects);
};
//get /subject/id/chapters
const getChapters = async(req,res)=>{
    const chapters = await Chapter.find({
        subject:req.params.id,
    });
    res.status(200).json(chapters);
};
//get notes
const getNotes = async(req,res)=>{
    const notes = await Note.find({
        chapter:req.params.id,
    })
    .populate("subject","name")
    .populate("chapter","name")
    .populate("uploadedBy","name");
    
    res.status(200).json(notes);
};

module.exports = {
    getSubjects,
    getChapters,
    getNotes,
};
