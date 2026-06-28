const express = require ("express");
const router = express.Router();

const {protect} = require("../middleware/authMiddleware");
const{
    getQuestions,
    submitAnswer,
    getProgress,
} = require("../controllers/practiceController");
router.get("/questions/:chapterId",protect,getQuestions);
router.post("/submit",protect,submitAnswer);
router.get("/progress",protect,getProgress);
module.exports = router;