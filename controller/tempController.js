const Template = require("../model/TempModel");
const factory = require("./handlerFactory");
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require("../utils/catchAsync");

//exports.createTemplate = factory.createOne(Template);
//exports.getAllTemplates = factory.getAll(Template);
exports.getTemplate = factory.getOne(Template);
exports.updateTemplate = factory.updateOne(Template);
exports.deleteTemplate = factory.deleteOne(Template);



// Add User Template

exports.createUserTemplate = catchAsync(async (req, res, next) => {
    const { companyName,
        username, studentid, score, course, logoURL, date, regisNo } = req.body;
    try {
        const newTemplate = new Template({
            companyName,
            username, studentid, score, course, logoURL, date, regisNo,
            user: req.user.id
        });

        const doc = await newTemplate.save();
        res.status(200).json({
            status: "success",
            doc
        });
    } catch (err) {
        res.status(500).send(err);
    }

})


//Get User Genrated Templates
exports.getUserGenratedTemp = catchAsync(async (req, res, next) => {
    const features = await new APIFeatures(
        Template.find({ user: req.user.id }),
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