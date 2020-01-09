const express = require("express");
const studentController = require("./../controller/studentController");
const authController = require("./../controller/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin"));

router
    .route("/")
    .get(studentController.getUserStudents)
    .post(studentController.createStudent);

router
    .route("/:id")
    .get(studentController.getStudent)
    .patch(studentController.updateStudent)
    .delete(studentController.deleteStudent);

module.exports = router;
