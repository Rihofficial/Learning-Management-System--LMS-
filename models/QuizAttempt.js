const mongoose = require("mongoose");

const quizAttemptSchema = new mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    answers: [{ questionId: String, answer: String }],
    score: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizAttempt", quizAttemptSchema);
