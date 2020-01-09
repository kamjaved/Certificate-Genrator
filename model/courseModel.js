const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

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

    createdAt: {
        type: Date,
        default: Date.now
    }
});

courseSchema.pre(/^find/, function (next) {
    this.populate({
        path: "user",
        select: "companyName"
    });
    next();
});

module.exports = Course = mongoose.model("Course", courseSchema);
