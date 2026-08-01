const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const { generatePatientReport } = require("../controllers/reportController");

router.get("/patients", auth, generatePatientReport);

module.exports = router;