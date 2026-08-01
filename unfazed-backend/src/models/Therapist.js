const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        unique: true
    },

    bio: {
        type: String,
        default: ""
    },

    specializations: [{
        type: String
    }],

    languages: [{
        type: String
    }]
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Therapist", therapistSchema);