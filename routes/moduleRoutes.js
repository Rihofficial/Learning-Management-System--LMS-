const express = require("express");
const router = express.Router();
const {
  createModule,
  addLesson,
  getModulesByCourse,
} = require("../controllers/moduleController");

const { protect, authorize } = require("../middlewares/authMiddleware");

router.post(
  "/:courseId",
  protect,
  authorize("instructor", "admin"),
  createModule
);
router.post(
  "/lesson/:moduleId",
  protect,
  authorize("instructor", "admin"),
  addLesson
);
router.get("/:courseId", protect, getModulesByCourse);

module.exports = router;
