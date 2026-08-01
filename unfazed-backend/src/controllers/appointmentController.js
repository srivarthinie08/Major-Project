const Appointment=require("../models/Appointment");

exports.createAppointment=async(req,res)=>{

try{

const {patient,date,time,reason}=req.body;

const appointment=await Appointment.create({

therapist:req.user.id,
patient,
date,
time,
reason

});

res.status(201).json({

message:"Appointment Created Successfully",
appointment

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.getAppointments=async(req,res)=>{

try{

const appointments=await Appointment.find({

therapist:req.user.id

});

res.json(appointments);

}

catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.deleteAppointment=async(req,res)=>{

try{

await Appointment.findByIdAndDelete(req.params.id);

res.json({

message:"Appointment Deleted"

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};