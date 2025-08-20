const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    assignment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    file: String,
    submittedAt: { type: Date, default: Date.now },
    graded: { type: Boolean, default: false },
    score: Number,
    feedback: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);
