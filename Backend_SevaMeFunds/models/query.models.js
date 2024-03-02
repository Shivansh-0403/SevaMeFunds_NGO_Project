// import mongoose from "mongoose";
const mongoose = require('mongoose')

const querySchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    query: {
        type: String,
        required: true
    }
}, {timestamps: true});

// Create a model
// 
module.exports = mongoose.model('Query', querySchema);