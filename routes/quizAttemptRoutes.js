const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const { attemptQuiz } = require("../controllers/quizAttemptController");

router.post("/:quizId", protect, authorize("student"), attemptQuiz);

module.exports = router;
