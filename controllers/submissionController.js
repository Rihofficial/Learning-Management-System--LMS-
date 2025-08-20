const Submission = require("../models/Submission");

exports.submitAssignment = async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const file = req.file?.path;

    const submission = await Submission.create({
      assignment: assignmentId,
      student: req.user.id,
      file,
    });

    res.status(201).json(submission);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
