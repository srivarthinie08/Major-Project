const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {

createPatient,

getPatients,

deletePatient

} = require("../controllers/patientController");

router.post("/",auth,createPatient);

router.get("/",auth,getPatients);

router.delete("/:id",auth,deletePatient);

module.exports = router;