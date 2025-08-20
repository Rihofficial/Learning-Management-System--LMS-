const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    resource: String, // file or link
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", assignmentSchema);
