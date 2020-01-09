import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    getCourses,
    deleteCourse,
    setCurrentCourse
} from "../../_actions/courseAction.js";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const CourseMaster = ({
    getCourses,
    deleteCourse,
    setCurrentCourse,
    courses,
    filtered,
    loading,
    history
}) => {
    useEffect(() => {
        getCourses();
        //eslint-disable-next-line
    }, [getCourses]);

    const onDeleteHandler = id => {
        deleteCourse(id);
    };

    const notAvailableError = <small className="text-danger">NA</small>;

    return (
        <Fragment>
            <div className="container-fluid">

                <section className="container-fluid mt-4  justify-content-center ">

                    <div className="container">
                        <div className="row justify-content-center animated fadeInRight">
                            <div className="col-lg-7 col-md-10 align-item-center">
                                <h2 className="text-center pt-2"> All Courses </h2>
                                <br />
                                <div className="row">
                                    <table className="table table-hover mt-2">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Course Name</th>
                                                <th scope="col" className="text-right">
                                                    Action
                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {courses.map(course => (
                                                <tr key={course._id}>
                                                    <td>{course.name}</td>
                                                    <td className="text-right">
                                                        <Link
                                                            to={`/course/editCourse/${course._id}`}
                                                            onClick={() => setCurrentCourse(course)}
                                                        >
                                                            <i className="fa fa-edit fa-lg mr-4"></i>
                                                        </Link>
                                                        <Link
                                                            title="Delete"
                                                            to="#!"
                                                            onClick={() => onDeleteHandler(course._id)}
                                                        >
                                                            <i className="fa fa-trash text-danger fa-lg"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div></div></div>
                </section>
            </div>
        </Fragment>
    );
};

CourseMaster.propTypes = {
    getCourses: PropTypes.func.isRequired,
    deleteCourse: PropTypes.func.isRequired,
    setCurrentCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    courses: state.course.courses,
    filtered: state.course.filtered,
    loading: state.course.loading
});
export default connect(
    mapStateToProps,
    { getCourses, deleteCourse, setCurrentCourse }
)(CourseMaster);
