const express = require("express");
const cors = require("cors");
const appointmentRoutes=require("./routes/appointmentRoutes");
const authRoutes = require("./routes/authRoutes");
const therapistRoutes = require("./routes/therapistRoutes");
const patientRoutes=require("./routes/patientRoutes");
const app = express();
const noteRoutes=require("./routes/noteRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const reportRoutes = require("./routes/reportRoutes");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        message: "Unfazed Backend Running Successfully"
    });

});
app.use("/api/notes",noteRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/patients",patientRoutes);
app.use("/api/therapist", therapistRoutes);
app.use("/api/appointments",appointmentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/reports", reportRoutes);
module.exports = app;