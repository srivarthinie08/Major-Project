const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
{
    therapist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Therapist",
        required:true
    },

    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    email:{
        type:String
    },

    address:{
        type:String
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Patient", patientSchema);