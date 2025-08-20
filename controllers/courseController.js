const Course = require("../models/Course");

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const { title, description, thumbnail } = req.body;

    const course = await Course.create({
      title,
      description,
      thumbnail,
      instructor: req.user.id,
    });

    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all published courses
exports.getCourses = async (req, res) => {
  try {
    // const courses = await Course.find({ status: "published" }).populate(
    //   "instructor",
    //   "fullName email"
    // );
     const filter = req.user.role === "student" ? { isApproved: true } : {};
     const courses = await Course.find(filter);
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single course by ID
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "instructor",
      "fullName email"
    );
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a course (only by instructor or admin)
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (
      course.instructor.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this course" });
    }

    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (
      course.instructor.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this course" });
    }

    await course.deleteOne();
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
// Add this in courseController.js
exports.enrollStudent = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    if (course.students.includes(req.user.id)) {
      return res.status(400).json({ message: 'Already enrolled' });
    }

    course.students.push(req.user.id);
    await course.save();

    res.json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
