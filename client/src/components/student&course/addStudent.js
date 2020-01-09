import React, { Fragment, useEffect, useState } from 'react'
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStudent, getStudents } from '../../_actions/studentAction'
import { getCourses } from "../../_actions/courseAction"
import '../UI/Dashboard.css'

const AddStudent = ({
    getStudents, history,
    getCourses,
    addStudent,
    courses,
}) => {

    useEffect(() => {
        getStudents();
        getCourses();
        //eslint-disable-next-line
    }, [getStudents, getCourses]);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        course: "",
        qualification: "",
    });

    const { name, phone, address, qualification, course } = formData;

    const onChangeHandler = e => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        addStudent(formData, history);
    };

    let options = courses.map(courses => (
        <option key={courses._id} value={courses._id}>
            {courses.name}
        </option>
    ));
    return (
        <Fragment>

            <div className="container-fluid">
                <form onSubmit={e => onSubmitHandler(e)}>
                    <section className="login py-2 border-top-1">
                        <div className="container">
                            <div className="row justify-content-center animated fadeInRight">
                                <div className="col-lg-7 col-md-10 align-item-center">
                                    <div className="bg-light border border-primary">
                                        <h3 className="bg-primary text-center text-white p-4">New Student</h3>
                                        <fieldset className="p-4">
                                            <input name="name"
                                                placeholder="Name"
                                                type="text"
                                                value={name}
                                                onChange={e => onChangeHandler(e)} className="border p-3 w-100 my-2" />

                                            <input name="phone"
                                                placeholder="Phone"
                                                type="text"
                                                value={phone}
                                                onChange={e => onChangeHandler(e)} className="border p-3 w-100 my-2" />

                                            <input name="address"
                                                placeholder="Address"
                                                type="text"
                                                value={address}
                                                onChange={e => onChangeHandler(e)} className="border p-3 w-100 my-2" />
                                            <input name="qualification"
                                                placeholder="Qualification"
                                                type="text"
                                                value={qualification}
                                                onChange={e => onChangeHandler(e)} className="border p-3 w-100 my-2" />

                                            <select
                                                className="border p-3 w-100 my-2"
                                                name="course"
                                                value={course}
                                                defaultValue={{ label: "Select Dept", value: 0 }}
                                                onChange={e => onChangeHandler(e)} >
                                                <option>Select Course</option>
                                                {options}
                                            </select>

                                            <button type="submit" className="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3">Add</button>

                                        </fieldset>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </Fragment>
    )
}

AddStudent.propTypes = {
    addStudent: PropTypes.func.isRequired,
    getStudents: PropTypes.func.isRequired,
    getCourses: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    student: state.student,
    courses: state.course.courses
});
export default connect(mapStateToProps, { addStudent, getStudents, getCourses })(AddStudent);
