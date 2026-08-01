const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
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

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    }

},
{
    timestamps:true
}
);

module.exports = mongoose.model("Note", noteSchema);