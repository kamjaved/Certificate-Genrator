const mongoose = require("mongoose");
const shortid = require('shortid');

const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },

    name: {
        type: String,
        unique: true,
        required: [true, "There must be a Name"],
        uppercase: true
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "Student must have a phone no."]
    },

    address: {
        type: String,
        required: [true, "Student have must and Address"]
    },

    qualification: {
        type: String,
        required: [true, "Student have must and Qualification"]

    },
    course: {
        type: mongoose.Schema.ObjectId,
        ref: "Course"

    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    studentid: {
        type: String,
        default: shortid.generate,
        unique: true,
        uppercase: true,
    },
});

studentSchema.pre(/^find/, function (next) {
    this.populate({
        path: "course"
    }).populate({
        path: "user",
        select: "companyName"
    });
    next();
});

module.exports = Student = mongoose.model("Student", studentSchema);
