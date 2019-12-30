const express = require("express");
const templateController = require("../controller/tempController");
const authController = require("../controller/authController");
const router = express.Router({ mergeParams: true });



//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization

router
    .route("/")
    .post(templateController.createTemplate)
    .get(templateController.getAllTemplates) // restrict to admin only
// router.use(authController.restrictTo("admin"));

router
    .route("/:id")
    .get(templateController.getTemplate)
    .patch(templateController.updateTemplate)
    .delete(authController.restrictTo("admin"), templateController.deleteTemplate);

module.exports = router;
