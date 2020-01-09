const Course = require("../model/courseModel");
const factory = require("./handlerFactory");
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require("../utils/catchAsync");

//exports.createCourse = factory.createOne(Course);
//exports.getAllCourses = factory.getAll(Course);
exports.getCourse = factory.getOne(Course);
exports.updateCourse = factory.updateOne(Course);
exports.deleteCourse = factory.deleteOne(Course);


//Get Course
exports.getUserCourses = catchAsync(async (req, res, next) => {
    const features = await new APIFeatures(
        Course.find({ user: req.user.id }),
        req.query
    )
        .sort()
        .paginate();
    const docs = await features.query;
    res.status(200).json({
        status: "success",
        result: docs.length,
        data: docs
    });
});

// Post Course

exports.createCourse = catchAsync(async (req, res, next) => {
    const { name, user } = req.body;
    try {
        const newCourse = new Course({
            name,
            user: req.user.id
        });

        const doc = await newCourse.save();
        res.status(200).json({
            status: "success",
            doc
        });
    } catch (err) {
        res.status(500).send(err);
    }

})

