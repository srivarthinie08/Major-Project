const express=require("express");

const router=express.Router();

const auth=require("../middleware/authMiddleware");

const{

createAppointment,
getAppointments,
deleteAppointment

}=require("../controllers/appointmentController");

router.post("/",auth,createAppointment);

router.get("/",auth,getAppointments);

router.delete("/:id",auth,deleteAppointment);

module.exports=router;