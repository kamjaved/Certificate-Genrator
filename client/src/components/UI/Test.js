import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCities } from "../../_actions/locationActions/cityAction";
import { getStates } from "../../_actions/locationActions/stateAction";
import { getLocations } from "../../_actions/locationActions/locationAction";
import { getCustomers } from "../../_actions/CustomerAction//customerAction";
import { getFilterUserType } from "../../_actions/userDetailAction/userAction";

import { connect } from "react-redux";

import { addVisitSchedule } from "../../_actions/scheduleAction/visitScheduleAction";

const AddVisitSchedule = ({
    getCities,
    getStates,
    getLocations,
    getCustomers,
    getFilterUserType,
    addVisitSchedule,
    states,
    cities,
    fieldengineers,
    locations,
    customers,
    history
}) => {
    useEffect(() => {
        getStates();
        getCities();
        getLocations();
        getCustomers();
        getFilterUserType();
        //eslint-diable-next-line
    }, [getStates, getCities, getLocations, getCustomers, getFilterUserType]);

    const [formData, setFormData] = useState({
        location: "",
        logphone: "",
        logdate: "",
        logtime: "",
        contactperson: "",
        pincode: "",
        address: "",
        state: "",
        city: "",
        name: "",
        email: "",
        fieldEnginner: "",
        customer: "",
        bestphone: "",
        bestcity: "",
        bestlocation: "",
        detail: "",
        bestdate: "",
        besttime: ""
    });

    const onChangeHandler = e => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        addVisitSchedule(formData, history);
    };

    let stateOptions = states.map(state => (
        <option key={state._id} value={state._id}>
            {state.state}
        </option>
    ));

    let cityOptions = cities.map(city => (
        <option key={city._id} value={city._id}>
            {city.city}
        </option>
    ));
    let locationOptions = locations.map(loc => (
        <option key={loc._id} value={loc._id}>
            {loc.location}
        </option>
    ));
    let customerOptions = customers.map(cust => (
        <option key={cust._id} value={cust._id}>
            {cust.name}
        </option>
    ));

    let feOption = fieldengineers.map(fe => (
        <option key={fe._id} value={fe._id} >
            {fe.name}
        </option>
    ));

    return (
        <Fragment>
            <div className="container-fluid m-auto">
                <div className="form-title">
                    <h1 className="pt-4">Visit Schedule</h1>
                    <small className="lead">Set Schedule for Complaint</small>
                </div>{" "}
                <br />
                {/*-- Modal Body Starts  -*/}
                <div className="modal-body bg-light">
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Log Date"
                                    name="logdate"
                                    value={formData.logdate}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                                <small>
                                    <span className="text-danger">*</span>Log Date
                </small>
                            </div>

                            <div className="form-group col-sm-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Log Time"
                                    name="logtime"
                                    value={formData.logtime}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                                <small>
                                    <span className="text-danger">*</span>Log Time
                </small>
                            </div>

                            <div className="form-group col-sm-4">
                                <select
                                    className="form-control"
                                    label="Customer"
                                    name="customer"
                                    width={8}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                >
                                    <option>Choose Customer</option>
                                    {customerOptions}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <select
                                    className="form-control"
                                    label="State"
                                    name="state"
                                    width={8}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                >
                                    <option>Choose State</option>
                                    {stateOptions}
                                </select>
                            </div>
                            <div className="form-group col-sm-4">
                                <select
                                    className="form-control"
                                    label="City"
                                    name="city"
                                    width={8}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                >
                                    <option>Choose City</option>
                                    {cityOptions}
                                </select>
                            </div>
                            <div className="form-group col-sm-4">
                                <select
                                    className="form-control"
                                    label="Location"
                                    name="location"
                                    width={8}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                >
                                    <option>Choose Location</option>
                                    {locationOptions}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone No"
                                    name="logphone"
                                    value={formData.logphone}
                                    onChange={e => onChangeHandler(e)}
                                />
                            </div>
                            <div className="form-group col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Contact person"
                                    name="contactperson"
                                    value={formData.contactperson}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>
                        </div>
                        <br /> <br />
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone No."
                                    name="bestphone"
                                    value={formData.bestphone}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Best Visit Date"
                                    name="bestdate"
                                    value={formData.bestdate}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                                <span className="text-danger">*</span>{" "}
                                <small>Best visit date</small>
                            </div>
                            <div className="form-group col-sm-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Best Visit Time"
                                    name="besttime"
                                    value={formData.besttime}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                                <span className="text-danger">*</span>
                                <small>Best visit time</small>
                            </div>

                            <div className="form-group col-sm-4">
                                <select

                                    className="form-control"
                                    label="Field Engineer"
                                    name="fieldEnginner"
                                    width={8}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                >
                                    <option>Field Engineer</option>
                                    {feOption}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    name="bestcity"
                                    value={formData.bestcity}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>

                            <div className="form-group col-sm-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Location"
                                    name="bestlocation"
                                    value={formData.bestlocation}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>

                            <div className="form-group col-sm-4">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Complaint Details"
                                    name="detail"
                                    value={formData.detail}
                                    onChange={e => onChangeHandler(e)}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Add
            </button>
                    </form>
                </div>
                {/*-- Modal Body Ends  -*/}
            </div>
        </Fragment>
    );
};

AddVisitSchedule.propTypes = {
    getStates: PropTypes.func.isRequired,
    getCities: PropTypes.func.isRequired,
    getLocations: PropTypes.func.isRequired,
    getCustomers: PropTypes.func.isRequired,
    getFilterUserType: PropTypes.func.isRequired,
    addVisitSchedule: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    states: state.state.states,
    cities: state.city.cities,
    locations: state.location.locations,
    customers: state.customer.customers,
    users: state.user.users,
    fieldengineers: state.user.fieldEngineers
});

export default connect(
    mapStateToProps,
    { addVisitSchedule, getCustomers, getLocations, getCities, getStates, getFilterUserType }
)(AddVisitSchedule);

















<Fragment>
    <div className="wrapper">
        <div className="inner">
            <form action="">
                <h3>Personal Detail</h3>
                <div className="form-group">
                    <div className="form-wrapper">
                        <label for="">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-wrapper">
                        <label for="">Phone</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-wrapper">
                        <label for="">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-wrapper">
                        <label for="">Current City</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="=" form-group>
                    <label>I am a  </label>
                    <input type="checkbox" /> Student
            <span className="checkmark"></span>
                    <input type="checkbox" /> Employee
            <span className="checkmark"></span>


                </div> <br />

                <div className="form-wrapper">
                    <label for="">Current Address</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-wrapper">
                    <label for="">Permanent Address</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <div className="form-wrapper">
                        <label for="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-wrapper">
                        <label for="">Confirm Password</label>
                        <input type="password" className="form-control" />
                    </div>
                </div><br />
                <h3>Educational Detail</h3>

                <div className="form-group">
                    <div className="form-wrapper">
                        <label for="">Degree Type</label>
                        <select className="form-control scroll">
                            <option value="">Select Degree</option>
                            <option value="UG">UG</option>
                            <option value="PG">PG</option>
                            <option value="Dual Degree/Integrated">Dual Degree/Integrated </option>
                            <option value="Diploma">Diploma</option>
                        </select>
                    </div>
                    <div className="form-wrapper">
                        <label for="">Degree</label>
                        <select className="form-control scroll">
                            <option value="">Any</option>
                            <option value="B.A.">B.A.</option>
                            <option value="B.A.(Hons.)">B.A.(Hons.)</option>
                            <option value="B.AMS">B.AMS</option>
                            <option value="B.Arch}">B.Arch</option>
                            <option value="B.Com}">B.Com</option>
                            <option value="B.Des}">B.Des</option>
                            <option value="B.E. / B.Tech}">B.E. / B.Tech</option>
                            <option value="B.Ed}">B.Ed</option>
                            <option value="B.FSC}">B.FSC</option>
                            <option value="B.LIB - B.LIB.SC}">B.LIB - B.LIB.SC</option>
                            <option value="B.M.C - B.M.M}">B.M.C - B.M.M</option>
                            <option value="B.P.ED}">B.P.ED</option>
                            <option value="B.Pharm}">B.Pharm</option> <option value="B.sc}">B.sc</option>
                            <option value="B.Sc(hons)}">B.Sc(hons)</option>
                            <option value="Diploma}">B.V.SC</option>
                            <option value="B.V.SC}">BBA(hons)</option>
                            <option value="BBA/BBM/BBS(hons)}">BBA/BBM/BBS</option>
                            <option value="BCA/BCM">BCA/BCM</option>
                            <option value="BCOM(hons)">BCOM(hons)</option> <option value="BDS">BDS</option> <option value="BFA">BFA</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-wrapper">
                        <label for="">Branch</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-wrapper">
                        <label for="">Year of Passout</label>
                        <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="form-wrapper">
                    <label for="">College</label>
                    <input type="text" className="form-control" />
                </div>

                <button>Register Now</button>
            </form>
        </div>
    </div>
</Fragment>





    //// ----LIFE LINES------

    <div className="lifeline-container">
        <p>
            <span
                onClick={this.handleLifeline}
                id="fiftyfifty"
                className={classnames('mdi mdi-set-center mdi-24px lifeline-icon', {
                    'lifeline-icon-empty': this.state.fiftyFifty === 0
                })}>
                <span className="lifeline">{this.state.fiftyFifty}</span>
            </span>
        </p>

        // HINT

        <p>
            {this.state.hints > 0
                ?
                <span
                    onClick={this.handleHints}
                    id="hints"
                    className={classnames('mdi mdi-lightbulb-on mdi-24px lifeline-icon', {
                        'lifeline-icon-empty': this.state.hints === 0
                    })}>
                    <span className="lifeline">{this.state.hints}</span>
                </span>
                :
                <span
                    onClick={this.handleLifeline}
                    id="hints"
                    className={classnames('mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon', {
                        'lifeline-icon-empty': this.state.hints === 0
                    })}>
                    <span className="lifeline">{this.state.hints}</span>
                </span>
            }
        </p>

    </div>



