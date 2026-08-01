const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
{
    therapist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Therapist",
        required:true
    },

    patient:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    reason:{
        type:String
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model("Appointment",appointmentSchema);