const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");
const Note = require("../models/Note");

exports.getDashboard = async (req, res) => {
  try {
    const therapist = req.user.id;

    const patients = await Patient.countDocuments({ therapist });
    const appointments = await Appointment.countDocuments({ therapist });
    const notes = await Note.countDocuments({ therapist });

    res.json({
      patients,
      appointments,
      notes,
      earnings: 0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};