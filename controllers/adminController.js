const User = require("../models/User");
const Course = require("../models/Course");
const Quiz = require("../models/Quiz");
const Assignment = require("../models/Assignment");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.updateUserRole = async (req, res) => {
  const { userId, role } = req.body;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.role = role;
  await user.save();

  res.json({ message: "User role updated", user });
};

exports.approveCourse = async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (!course) return res.status(404).json({ message: "Course not found" });

  course.isApproved = true;
  await course.save();

  res.json({ message: "Course approved", course });
};

exports.getStats = async (req, res) => {
  const users = await User.countDocuments();
  const courses = await Course.countDocuments();
  const quizzes = await Quiz.countDocuments();
  const assignments = await Assignment.countDocuments();

  res.json({
    users,
    courses,
    quizzes,
    assignments,
  });
};
