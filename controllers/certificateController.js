const Course = require("../models/Course");
const Progress = require("../models/Progress");
const generateCertificate = require("../utils/certificateGenerator");

exports.downloadCertificate = async (req, res) => {
  const courseId = req.params.courseId;
  const progress = await Progress.findOne({
    course: courseId,
    student: req.user.id,
  });

  if (!progress || !progress.isComplete) {
    return res.status(400).json({ message: "Course not completed yet" });
  }

  const course = await Course.findById(courseId);
  const outputPath = `certificates/${req.user.id}_${courseId}.pdf`;

  await generateCertificate(req.user, course, outputPath);
  res.download(outputPath);
};
