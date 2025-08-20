const express = require("express");
const router = express.Router();
const {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  enrollStudent,
} = require("../controllers/courseController");

const { protect, authorize } = require("../middlewares/authMiddleware");

// Instructor or Admin only
router.post("/", protect, authorize("instructor", "admin"), createCourse);

// In courseRoutes.js
router.post('/enroll/:courseId', protect, authorize('student'), enrollStudent);


router.get("/", protect, getCourses);
router.get("/:id", protect, getCourse);
router.put("/:id", protect, authorize("instructor", "admin"), updateCourse);
router.delete("/:id", protect, authorize("instructor", "admin"), deleteCourse);

const upload = require("../middlewares/uploadMiddleware");
router.post(
  "/",
  protect,
  authorize("instructor", "admin"),
  upload.single("thumbnail"),
  async (req, res, next) => {
    req.body.thumbnail = req.file?.path;
    next();
  },
  createCourse
);


module.exports = router;
