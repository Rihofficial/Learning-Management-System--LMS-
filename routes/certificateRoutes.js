const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const { downloadCertificate } = require("../controllers/certificateController");

router.get("/:courseId", protect, authorize("student"), downloadCertificate);

module.exports = router;
