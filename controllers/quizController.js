const Quiz = require("../models/Quiz");

exports.createQuiz = async (req, res) => {
  try {
    const { module, questions } = req.body;
    const quiz = await Quiz.create({ module, questions });
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ module: req.params.moduleId });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
