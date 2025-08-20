const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const {
  markLessonComplete,
  getProgress,
} = require("../controllers/progressController");

router.post("/", protect, authorize("student"), markLessonComplete);
router.get("/:courseId", protect, authorize("student"), getProgress);

module.exports = router;
