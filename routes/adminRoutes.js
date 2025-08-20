const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const {
  getAllUsers,
  updateUserRole,
  approveCourse,
  getStats,
} = require("../controllers/adminController");

router.use(protect, authorize("admin"));

router.get("/users", getAllUsers);
router.put("/users/role", updateUserRole);
router.put("/courses/:courseId/approve", approveCourse);
router.get("/stats", getStats);

module.exports = router;
