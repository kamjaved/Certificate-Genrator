const express = require("express");
const templateController = require("../controller/tempController");
const authController = require("../controller/authController");
const router = express.Router({ mergeParams: true });



//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization

router.use(authController.restrictTo("admin"));
router
    .route("/")
    .post(templateController.createUserTemplate)
    .get(templateController.getUserGenratedTemp)


router
    .route("/:id")
    .get(templateController.getTemplate)
    .patch(templateController.updateTemplate)
    .delete(templateController.deleteTemplate);

module.exports = router;
