const Student = require("../model/studentModel");
const factory = require("./handlerFactory");
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require("../utils/catchAsync");

exports.createStudent = factory.createOne(Student);
exports.getAllStudents = factory.getAll(Student);
exports.getStudent = factory.getOne(Student);
exports.updateStudent = factory.updateOne(Student);
exports.deleteStudent = factory.deleteOne(Student);

//Get Student
exports.getUserStudents = catchAsync(async (req, res, next) => {
    const features = await new APIFeatures(
        Student.find({ user: req.user.id }),
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

exports.createStudent = catchAsync(async (req, res, next) => {
    const { name, phone, address, qualification, course, user } = req.body;
    try {
        const newStudent = new Student({
            name, phone, address, course, qualification,
            user: req.user.id
        });

        const doc = await newStudent.save();
        res.status(200).json({
            status: "success",
            doc
        });
    } catch (err) {
        res.status(500).send(err);
    }

})