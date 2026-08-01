const Therapist = require("../models/Therapist");
const generateSlug=require("../utils/generateSlug");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const exists = await Therapist.findOne({ email });

        if (exists) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const therapist = await Therapist.create({
            name,
            email,
            password: hashedPassword,
            slug:generateSlug(name)
        });

        res.status(201).json({
            message: "Registration Successful",
            therapist
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// Login
exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const therapist = await Therapist.findOne({ email });

        if (!therapist) {
            return res.status(400).json({
                message: "Invalid Email"
            });
        }

        const match = await bcrypt.compare(password, therapist.password);

        if (!match) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            { id: therapist._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login Successful",
            token
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};