import React, { Fragment, useState, useEffect } from 'react'
import '../UI/Dashboard.css'
import template3 from '../images/Cert3.png';
import { withRouter } from 'react-router-dom';

import PropTypes from "prop-types";

import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { saveformData3 } from "../../_actions/templateAction";
import { getStudents } from "../../_actions/studentAction";
import { getCourses } from "../../_actions/courseAction";


const Template = ({

    companyName, logoURL, regisNo, user,
    saveformData3, history, students, getCourses, getStudents, courses
}) => {

    const [formData, setFormData] = useState({
        companyName: "",
        username: "",
        studentid: "",
        score: "",
        course: "",
        date: "",
        logoURL: "",
        regisNo: " "


    });

    useEffect(() => {
        getCourses()
        getStudents()
        setFormData({
            companyName: companyName,
            logoURL: logoURL,
            regisNo: regisNo

        })

    }, [getStudents, getCourses])

    //---- CALL PE HAI ABHI

    const { username, studentid, course, date, score, } = formData;

    const onChangeHandler = e => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        saveformData3(formData, history);
        // formsubmit();
    };


    // const formsubmit = () => {

    //     const tempformdata = {
    //         companyName,
    //         username,
    //         studentid,
    //         score,
    //         course,
    //         date,
    //         logoURL,
    //         regisNo,
    //     }
    //     genrateTemp1(tempformdata, history)
    // }

    let studentopt = students.map(students => (
        <option key={students._id} value={students._name}>
            {students.name}
        </option>
    ));
    let courseopt = courses.map(course => (
        <option key={course._id} value={course._name}>
            {course.name}
        </option>
    ));



    return (
        <Fragment>
            <Helmet><title>Template 3- Globus Labs</title></Helmet>
            <section className="container-fluid">

                {/*-- Modal Body Starts  -*/}
                <div className="row ">
                    <div className="container bg-light col-lg-5 col-md-8 align-item-center animated fadeIn">
                        <form onSubmit={onSubmitHandler} className="">
                            <h2 className="bg-light p-4 text-center">Golden Premium</h2>
                            <fieldset className="p-4">
                                <div className="form-row">
                                    <div className="form-group col-sm-4">
                                        <input type="text"
                                            placeholder="Company Name"
                                            className="border p-3 w-100 my-2"
                                            name="companyName"
                                            value={companyName}
                                            onChange={e => onChangeHandler(e)}
                                            disabled />
                                    </div>
                                    <div className="form-group col-sm-4">

                                        <select
                                            type="text"
                                            className="border p-3 w-100 my-2"
                                            name="username"
                                            value={username}
                                            defaultValue={{ label: "Select Name", value: 0 }}
                                            onChange={e => onChangeHandler(e)} >
                                            <option>Select Name</option>
                                            {studentopt}
                                        </select>
                                    </div>

                                    <div className="form-group col-sm-4">

                                        <select
                                            type="text"
                                            className="border p-3 w-100 my-2"
                                            name="course"
                                            value={course}
                                            defaultValue={{ label: "Select Course", value: 0 }}
                                            onChange={e => onChangeHandler(e)} >
                                            <option>Select Course</option>
                                            {courseopt}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-sm-4">
                                        <input type="text"
                                            placeholder="Score"
                                            className="border p-3 w-100 my-2"
                                            name="score"
                                            value={score}
                                            onChange={e => onChangeHandler(e)}
                                            required />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <input type="text"
                                            placeholder="Student ID"
                                            className="border p-3 w-100 my-2"
                                            name="studentid"
                                            value={studentid}
                                            onChange={e => onChangeHandler(e)}
                                            required />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <input type="date"
                                            className="border p-3 w-100 my-2"
                                            placeholder="Date No"
                                            name="date"
                                            value={date}
                                            onChange={e => onChangeHandler(e)}
                                            required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-sm-4">
                                        <input type="text"
                                            className="border p-3 w-100 my-2"
                                            placeholder="Company Logo URL"
                                            name="logoURL"
                                            value={logoURL}
                                            onChange={e => onChangeHandler(e)}
                                            disabled />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <input
                                            type="text"
                                            className="border p-3 w-100 my-2"
                                            placeholder="Company Registration No"
                                            name="regisNo"
                                            value={regisNo}
                                            onChange={e => onChangeHandler(e)}
                                            disabled />
                                    </div>

                                </div> <br /><br />
                            </fieldset>


                            <div className="text-center">
                                <button type="submit" className="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3">
                                    SUBMIT FORM</button>
                            </div>

                        </form>

                    </div>
                    <div className="container bg-light col-lg-4 col-md-4 align-item-center animated fadeIn ">

                        <h2 className="bg-light p-4 text-center">Certificate Preview</h2>
                        <img src={template3} className="card-img-top img-fluid" />

                    </div>
                </div>
                {/*-- Modal Body Ends  -*/}


            </section>
        </Fragment>
    )
}
Template.propTypes = {
    saveformData3: PropTypes.func.isRequired,
    getStudents: PropTypes.func.isRequired,
    getCourses: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    students: PropTypes.object.isRequired,
    courses: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    user: state.auth.user,
    students: state.student.students,
    courses: state.course.courses,
    companyName: state.auth.companyName,
    logoURL: state.auth.logoURL,
    regisNo: state.auth.regisNo,


});


export default connect(mapStateToProps, { saveformData3, getStudents, getCourses })(withRouter(Template))
