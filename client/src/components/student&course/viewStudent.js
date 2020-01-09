import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    getStudents,
    deleteStudent,
    setCurrentStudent
} from "../../_actions/studentAction.js";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const StudentMaster = ({
    getStudents,
    deleteStudent,
    setCurrentStudent,
    students,
    filtered,
    loading,
    history
}) => {
    useEffect(() => {
        getStudents();
        //eslint-disable-next-line
    }, [getStudents]);

    const onDeleteHandler = id => {
        deleteStudent(id);
    };

    const notAvailableError = <small className="text-danger">NA</small>;

    return (
        <Fragment>
            <div className="container-fluid">

                <section className="container-fluid mt-4  justify-content-center ">

                    <div className="container">
                        <div className="row justify-content-center animated fadeInRight">
                            <div className="col-lg-12 col-md-8 col-sm-6 align-item-center">
                                <h2 className="text-center pt-2"> All Students </h2>
                                <br />
                                <div className="row">
                                    <table className="table table-hover mt-2">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Student ID</th>
                                                <th scope="col">Qualification</th>
                                                <th scope="col">Course</th>
                                                <th scope="col" className="text-right">
                                                    Action
                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {students.map(student => (
                                                <tr key={student._id}>
                                                    <td>{student.name}</td>
                                                    <td>{student.address}</td>
                                                    <td>{student.phone}</td>
                                                    <td>{!student.studentid ? notAvailableError : student.studentid}</td>
                                                    <td>{student.qualification}</td>
                                                    <td><b>{student.course.name}</b></td>

                                                    <td className="text-right">
                                                        <Link
                                                            to={`/student/editStudent/${student._id}`}
                                                            onClick={() => setCurrentStudent(student)}
                                                        >
                                                            <i className="fa fa-edit fa-lg mr-4"></i>
                                                        </Link>
                                                        <Link
                                                            title="Delete"
                                                            to="#!"
                                                            onClick={() => onDeleteHandler(student._id)}
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

StudentMaster.propTypes = {
    getStudents: PropTypes.func.isRequired,
    deleteStudent: PropTypes.func.isRequired,
    setCurrentStudent: PropTypes.func.isRequired,
    students: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    students: state.student.students,
    filtered: state.student.filtered,
    loading: state.student.loading
});
export default connect(
    mapStateToProps,
    { getStudents, deleteStudent, setCurrentStudent }
)(StudentMaster);
