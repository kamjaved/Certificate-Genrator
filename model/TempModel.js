const mongoose = require("mongoose");


const TempModel = new mongoose.Schema({

    companyName: {
        type: String,
        required: [true, ' Must have Company name'],
    },

    username: {
        type: String,
        required: [true, ' Must have Username'],
    },

    studentid: {
        type: String,
        required: [true, ' Must have studentid'],
        unique: true,
    },

    score: {
        type: String,
        // required: [true, 'Enter Score']
    },

    course: {
        type: String,
        required: [true, 'Enter Course']
    },

    logoURL: {
        type: String,
        required: [true, 'Must have Company Logo URL']
    },

    date: {
        type: String,

    },
    regisNo: {
        type: String,
        required: [true, 'Must have Company Regist No.']


    },

    dateCreated: {
        type: Date,
        default: new Date()
    }
});




module.exports = mongoose.model('temp', TempModel);