const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String], // For MCQ
  answer: String, // Correct answer (can match an option)
  type: { type: String, enum: ["mcq", "text"], default: "mcq" },
});

const quizSchema = new mongoose.Schema(
  {
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
    questions: [questionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
