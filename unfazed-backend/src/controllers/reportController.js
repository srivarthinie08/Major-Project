const PDFDocument = require("pdfkit");
const Patient = require("../models/Patient");

exports.generatePatientReport = async (req, res) => {
  try {
    const patients = await Patient.find({ therapist: req.user.id });

    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=patients-report.pdf"
    );

    doc.pipe(res);

    doc.fontSize(22).text("Patient Report", { align: "center" });
    doc.moveDown();

    patients.forEach((patient, index) => {
      doc.fontSize(14).text(`${index + 1}. ${patient.name}`);
      doc.text(`Age: ${patient.age}`);
      doc.text(`Gender: ${patient.gender}`);
      doc.text(`Phone: ${patient.phone}`);
      doc.moveDown();
    });

    doc.end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};