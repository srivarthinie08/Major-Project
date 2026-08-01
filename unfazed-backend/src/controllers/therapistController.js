const Therapist = require("../models/Therapist");

exports.getProfile = async (req, res) => {
    try {

        const therapist = await Therapist.findById(req.user.id).select("-password");

        res.json(therapist);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

exports.updateProfile = async (req, res) => {

    try {

        const { name, bio, specializations, languages } = req.body;

        const therapist = await Therapist.findById(req.user.id);

        therapist.name = name || therapist.name;
        therapist.bio = bio || therapist.bio;
        therapist.specializations = specializations || therapist.specializations;
        therapist.languages = languages || therapist.languages;

        await therapist.save();

        res.json({
            message: "Profile Updated Successfully",
            therapist
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};