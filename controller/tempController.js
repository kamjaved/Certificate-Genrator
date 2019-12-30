const Template = require("../model/TempModel");
const factory = require("./handlerFactory");

exports.createTemplate = factory.createOne(Template);
exports.getAllTemplates = factory.getAll(Template);
exports.getTemplate = factory.getOne(Template);
exports.updateTemplate = factory.updateOne(Template);
exports.deleteTemplate = factory.deleteOne(Template);
