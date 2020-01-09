const express = require("express");
const courseController = require("./../controller/courseController");
const authController = require("./../controller/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin"));

router
    .route("/")
    .get(courseController.getUserCourses)
    .post(courseController.createCourse);

router
    .route("/:id")
    .get(courseController.getCourse)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse);

module.exports = router;
