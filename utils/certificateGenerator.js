const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateCertificate = (user, course, outputPath) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(outputPath);

    doc.pipe(stream);
    doc.fontSize(26).text("Certificate of Completion", { align: "center" });
    doc.moveDown();
    doc
      .fontSize(20)
      .text(`Presented to: ${user.fullName}`, { align: "center" });
    doc.text(`For successfully completing the course: ${course.title}`, {
      align: "center",
    });
    doc.moveDown();
    doc
      .fontSize(14)
      .text(`Date: ${new Date().toLocaleDateString()}`, { align: "center" });
    doc.end();

    stream.on("finish", () => resolve(outputPath));
    stream.on("error", (err) => reject(err));
  });
};

module.exports = generateCertificate;
