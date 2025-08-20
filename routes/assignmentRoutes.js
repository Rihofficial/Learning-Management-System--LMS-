const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const {
  createAssignment,
  getAssignments,
} = require("../controllers/assignmentController");

router.post(
  "/",
  protect,
  authorize("instructor", "admin"),
  upload.single("resource"),
  createAssignment
);

router.get("/:courseId", protect, getAssignments);

module.exports = router;
