// routes/quizRoutes.js
const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const { createQuiz, getQuiz } = require("../controllers/quizController");

router.post("/", protect, authorize("instructor", "admin"), createQuiz);
router.get("/:moduleId", protect, getQuiz);

module.exports = router;
