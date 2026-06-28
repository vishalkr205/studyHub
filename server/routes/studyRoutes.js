const express = require("express");
const router = express.Router();

const{
    getSubjects,
    getChapters,
    getNotes,
} = require("../controllers/studyController");

router.get("/subjects",getSubjects);
router.get("/subjects/:id/chapters",getChapters);
router.get("/chapters/:id/notes",getNotes);
module.exports=router;