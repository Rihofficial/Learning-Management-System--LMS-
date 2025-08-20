const Quiz = require("../models/Quiz");
const QuizAttempt = require("../models/QuizAttempt");

exports.attemptQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { answers } = req.body; // Array of { questionId, answer }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    let score = 0;

    for (let i = 0; i < quiz.questions.length; i++) {
      const q = quiz.questions[i];
      const userAnswer = answers.find((a) => a.questionId == q._id.toString());
      if (
        userAnswer &&
        userAnswer.answer.trim().toLowerCase() === q.answer.trim().toLowerCase()
      ) {
        score++;
      }
    }

    const attempt = await QuizAttempt.create({
      quiz: quizId,
      student: req.user.id,
      answers,
      score,
    });

    res
      .status(201)
      .json({ message: "Quiz submitted", score, total: quiz.questions.length });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
