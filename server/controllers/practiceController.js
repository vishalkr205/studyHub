const Question=require("../models/Question");
const Attempt = require("../models/Attempt");

const getQuestions = async(req,res)=>{
    try{
        const questions = await Question.find({
            chapter:req.params.chapterId,
        }).select("-correctAnswer");

        res.status(200).json(questions);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};
const submitAnswer = async (req, res) => {
  try {
    const { questionId, selectedAnswer } = req.body;

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    const isCorrect = question.correctAnswer === selectedAnswer;

    const attempt = await Attempt.create({
      user: req.user._id,
      question: questionId,
      selectedAnswer,
      isCorrect,
    });

    res.status(201).json({
      message: "Answer submitted successfully",
      isCorrect,
      explanation: question.explanation,
      attempt,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProgress = async (req, res) => {
  try {
    const totalAttempts = await Attempt.countDocuments({
      user: req.user._id,
    });

    const correctAnswers = await Attempt.countDocuments({
      user: req.user._id,
      isCorrect: true,
    });

    const accuracy =
      totalAttempts === 0
        ? 0
        : ((correctAnswers / totalAttempts) * 100).toFixed(2);

    res.status(200).json({
      totalAttempts,
      correctAnswers,
      wrongAnswers: totalAttempts - correctAnswers,
      accuracy: `${accuracy}%`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
    getQuestions,
    submitAnswer,
    getProgress,
};