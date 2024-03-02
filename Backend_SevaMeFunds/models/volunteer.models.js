// import mongoose from "mongoose";
const mongoose = require('mongoose')

const volunteerFormSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    personalInfo: {
        type: String, 
        required:true
    },
    workInfo: {
        type: String
    }
}, {timestamps: true});


module.exports = mongoose.model('Volunteer', volunteerFormSchema);