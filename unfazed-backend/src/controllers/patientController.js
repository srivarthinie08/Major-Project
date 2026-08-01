const Patient = require("../models/Patient");

exports.createPatient = async (req, res) => {

try{

const patient = await Patient.create({

therapist:req.user.id,

name:req.body.name,

age:req.body.age,

gender:req.body.gender,

phone:req.body.phone,

email:req.body.email,

address:req.body.address

});

res.status(201).json({

message:"Patient Added Successfully",

patient

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.getPatients = async (req,res)=>{

try{

const patients = await Patient.find({

therapist:req.user.id

});

res.json(patients);

}catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.deletePatient = async (req,res)=>{

try{

await Patient.findByIdAndDelete(req.params.id);

res.json({

message:"Patient Deleted"

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};