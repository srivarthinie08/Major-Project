const Note = require("../models/Note");

exports.createNote = async (req, res) => {

try{

const note = await Note.create({

therapist:req.user.id,

patient:req.body.patient,

title:req.body.title,

description:req.body.description

});

res.status(201).json({

message:"Note Created Successfully",

note

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.getNotes = async (req,res)=>{

try{

const notes = await Note.find({
  therapist: req.user.id,
}).populate("patient", "name");

res.json(notes);

}catch(error){

res.status(500).json({

message:error.message

});

}

};



exports.deleteNote = async(req,res)=>{

try{

await Note.findByIdAndDelete(req.params.id);

res.json({

message:"Note Deleted"

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};