import React, { Fragment, useEffect, useState } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editCourse, getCurrentCourse } from '../../_actions/courseAction'
import '../UI/Dashboard.css'

const EditCourse = ({
    course: { course, loading },
    history,
    editCourse,
    getCurrentCourse,
    match

}) => {

    const [formData, setFormData] = useState({
        name: "",
    });

    const { name } = formData;

    useEffect(() => {
        getCurrentCourse(match.params.id);
        setFormData({
            name: loading || !course.name ? "" : course.name
        });
        //eslint-disable-next-line
    }, [loading, getCurrentCourse]);

    const onChangeHandler = e => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        editCourse(formData, history, match.params.id);
    };

    return (
        <Fragment>

            <div className="container-fluid">
                <form onSubmit={e => onSubmitHandler(e)}>
                    <section className="login py-2 border-top-1">
                        <div className="container">
                            <div className="row justify-content-center animated fadeInRight">
                                <div className="col-lg-7 col-md-10 align-item-center">
                                    <div className="bg-light border border-primary">

                                        <h3 className="bg-primary text-center text-white p-4">Edit Course</h3>
                                        <fieldset className="p-4">
                                            <input name="name"
                                                placeholder=" Course Name"
                                                type="text"
                                                value={name}
                                                onChange={e => onChangeHandler(e)} className="border p-3 w-100 my-2" />

                                            <button type="submit" className="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3">Edit</button>

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

EditCourse.propTypes = {
    editCourse: PropTypes.func.isRequired,
    getCurrentCourse: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    course: state.course
});
export default connect(mapStateToProps, { editCourse, getCurrentCourse })(EditCourse);
