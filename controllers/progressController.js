const Progress = require("../models/Progress");

exports.markLessonComplete = async (req, res) => {
  const { courseId, lessonId } = req.body;

  let progress = await Progress.findOne({
    course: courseId,
    student: req.user.id,
  });

  if (!progress) {
    progress = await Progress.create({
      course: courseId,
      student: req.user.id,
      completedLessons: [lessonId],
    });
  } else {
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
    }

    // Mark complete if all lessons done (optional logic for full check)
    // progress.isComplete = checkIfAllLessonsDone();

    await progress.save();
  }

  res.status(200).json({ message: "Lesson marked as complete", progress });
};

exports.getProgress = async (req, res) => {
  const progress = await Progress.findOne({
    course: req.params.courseId,
    student: req.user.id,
  });
  res.json(progress);
};
