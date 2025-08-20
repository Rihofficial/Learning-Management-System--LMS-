const Assignment = require("../models/Assignment");

exports.createAssignment = async (req, res) => {
  try {
    const { title, description, course, module, dueDate } = req.body;
    const resource = req.file?.path;

    const assignment = await Assignment.create({
      title,
      description,
      course,
      module,
      dueDate,
      resource,
    });

    res.status(201).json(assignment);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ course: req.params.courseId });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
