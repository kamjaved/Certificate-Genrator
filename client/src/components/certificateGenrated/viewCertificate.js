import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    getTemplates,
    deleteTemplate,
} from "../../_actions/templateAction";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const TemplateMaster = ({
    getTemplates,
    deleteTemplate,
    templates,
    filtered,
    loading,
    history
}) => {
    useEffect(() => {
        getTemplates();
        //eslint-disable-next-line
    }, [getTemplates]);

    const onDeleteHandler = id => {
        deleteTemplate(id);
    };

    const notAvailableError = <small className="text-danger">NA</small>;

    return (
        <Fragment>
            <div className="container-fluid">

                <section className="container-fluid mt-4  justify-content-center ">

                    <div className="container">
                        <div className="row justify-content-center animated fadeInRight">
                            <div className="col-lg-12 col-md-8 col-sm-6 align-item-center">
                                <h2 className="text-center pt-2"> All Templates </h2>
                                <br />
                                <div className="row">
                                    <table className="table table-hover mt-2">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Student Name</th>
                                                <th scope="col">StudentID</th>
                                                <th scope="col">Course</th>
                                                <th scope="col">Score</th>
                                                <th scope="col">Issue Date</th>
                                                <th scope="col" className="text-right">
                                                    Action
                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {templates.map(template => (
                                                <tr key={template._id}>
                                                    <td>{template.username}</td>
                                                    <td>{template.studentid}</td>
                                                    <td>{template.course}</td>
                                                    <td>{template.score}</td>
                                                    <td>{template.date}</td>
                                                    <td className="text-right">

                                                        <Link
                                                            title="Delete"
                                                            to="#!"
                                                            onClick={() => onDeleteHandler(template._id)}
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

TemplateMaster.propTypes = {
    getTemplates: PropTypes.func.isRequired,
    deleteTemplate: PropTypes.func.isRequired,
    templates: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    templates: state.template.templates,
    filtered: state.template.filtered,
    loading: state.template.loading
});
export default connect(
    mapStateToProps,
    { getTemplates, deleteTemplate }
)(TemplateMaster);
