const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");
const { protect, authorize } = require("../middlewares/authMiddleware");
const { submitAssignment } = require("../controllers/submissionController");

router.post(
  "/:assignmentId",
  protect,
  authorize("student"),
  upload.single("file"),
  submitAssignment
);

module.exports = router;
