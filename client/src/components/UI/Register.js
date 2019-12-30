import React, { Fragment, useState } from 'react'
import './Dashboard.css'


import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../_actions/authAction";

const Register = ({
    register, isAuthenticated, history
}) => {

    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        phone: "",
        city: "",
        address: "",

        regisNo: "",
        logoURL: "",
        password: "",
        passwordConfirm: "",

    });

    const {
        companyName,
        email,
        phone,
        address,
        regisNo,
        city,
        logoURL,
        password,
        passwordConfirm,
    } = formData;

    const onChangeHandler = e => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        register(formData, history);
    };



    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Fragment>
            <section className="container-fluid landing animated fadeIn">

                {/*-- Modal Body Starts  -*/}

                <div className="container bg-light animated fadeInRight border border-primary ">
                    <form onSubmit={onSubmitHandler} className="">
                        <h2 className="bg-primary text-center text-white p-4">Register Your Company</h2>
                        <fieldset className="p-4">
                            <div className="form-row">
                                <div className="form-group col-sm-4">
                                    <input type="text"
                                        placeholder="Company Name"
                                        className="border p-3 w-100 my-2"
                                        name="companyName"
                                        value={companyName}
                                        onChange={e => onChangeHandler(e)}
                                        required />
                                </div>
                                <div className="form-group col-sm-4">
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="border p-3 w-100 my-2"
                                        name="phone"
                                        value={phone}
                                        onChange={e => onChangeHandler(e)}
                                        required />
                                </div>

                                <div className="form-group col-sm-4">
                                    <input name="email"
                                        className="border p-3 w-100 my-2"
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={e => onChangeHandler(e)}
                                        required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-sm-4">
                                    <input type="text"
                                        placeholder="City"
                                        className="border p-3 w-100 my-2"
                                        name="city"
                                        value={city}
                                        onChange={e => onChangeHandler(e)}
                                        required />
                                </div>
                                <div className="form-group col-sm-4">
                                    <textarea type="text"
                                        placeholder="Address"
                                        className="border p-3 w-100 my-2"
                                        name="address"
                                        value={address}
                                        onChange={e => onChangeHandler(e)}
                                        required />
                                </div>
                                <div className="form-group col-sm-4">
                                    <input type="text"
                                        className="border p-3 w-100 my-2"
                                        placeholder="Registration No"
                                        name="regisNo"
                                        value={regisNo}
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
                                        required />
                                </div>
                                <div className="form-group col-sm-4">
                                    <input
                                        type="password"
                                        className="border p-3 w-100 my-2"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={e => onChangeHandler(e)}
                                        required />
                                </div>
                                <div className="form-group col-sm-4">
                                    <input type="password"
                                        className="border p-3 w-100 my-2"
                                        placeholder="Re-Enter Password"
                                        name="passwordConfirm"
                                        value={passwordConfirm}
                                        onChange={e => onChangeHandler(e)}
                                        required />
                                </div>
                            </div> <br /><br />
                        </fieldset>


                        <div className="text-center">
                            <button type="submit" className="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3">
                                SUBMIT FORM</button>
                        </div>

                    </form>
                </div>

                {/*-- Modal Body Ends  -*/}

            </section>
        </Fragment>
    )
}
Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { register })(Register)
