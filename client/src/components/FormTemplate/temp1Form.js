import React, { Fragment, useState, useEffect } from 'react'
import '../UI/Dashboard.css'
import template1 from '../images/Cert1.png';

import PropTypes from "prop-types";

import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { saveformData, genrateTemp1 } from "../../_actions/templateAction";


const Template = ({

    companyName, logoURL, regisNo, user,
    saveformData, history
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
        setFormData({
            companyName: companyName,
            logoURL: logoURL,
            regisNo: regisNo

        })

    }, [])


    const { username, studentid, course, date, score, } = formData;

    const onChangeHandler = e => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        saveformData(formData, history);
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




    return (
        <Fragment>
            <Helmet><title>Template 1- Globus Labs</title></Helmet>
            <section className="container-fluid">

                {/*-- Modal Body Starts  -*/}
                <div className="row justify-content-center">
                    <div className="container bg-light col-lg-5 col-md-8 align-item-center animated fadeInLeft ">
                        <form onSubmit={onSubmitHandler} className="">
                            <h2 className="bg-light p-4 text-center"> Template 1 Form</h2>
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
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="border p-3 w-100 my-2"
                                            name="username"
                                            value={username}
                                            onChange={e => onChangeHandler(e)}
                                            required />
                                    </div>

                                    <div className="form-group col-sm-4">
                                        <input
                                            className="border p-3 w-100 my-2"
                                            placeholder="Course"
                                            type="text"
                                            name="course"
                                            value={course}
                                            onChange={e => onChangeHandler(e)}
                                            required />
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
                    <div className="container bg-light col-lg-5 col-md-4 align-item-center animated zoomIn ">

                        <h2 className="bg-light p-4 text-center">Certificate Preview</h2>
                        <img src={template1} className="card-img-top img-fluid" />

                    </div>
                </div>
                {/*-- Modal Body Ends  -*/}


            </section>
        </Fragment>
    )
}
Template.propTypes = {
    saveformData: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    genrateTemp1: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    user: state.auth.user,
    companyName: state.auth.companyName,
    logoURL: state.auth.logoURL,
    regisNo: state.auth.regisNo

});


export default connect(mapStateToProps, { saveformData, genrateTemp1 })(Template)
