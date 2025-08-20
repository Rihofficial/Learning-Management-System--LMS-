const Module = require("../models/Module");
const Course = require("../models/Course");

// Create a module in a course
exports.createModule = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (
      course.instructor.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const module = await Module.create({ title, course: courseId });
    res.status(201).json(module);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Add lesson to a module
exports.addLesson = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const { title, content, videoUrl, resource } = req.body;

    const module = await Module.findById(moduleId);
    if (!module) return res.status(404).json({ message: "Module not found" });

    module.lessons.push({ title, content, videoUrl, resource });
    await module.save();

    res.status(201).json(module);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get modules for a course
exports.getModulesByCourse = async (req, res) => {
  try {
    const modules = await Module.find({ course: req.params.courseId });
    res.json(modules);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
