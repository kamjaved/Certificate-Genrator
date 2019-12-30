import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { clearTemplate } from '../../_actions/templateAction';
import PropTypes from "prop-types";


export const Template1 = ({
    formData,
    companyName, username
}) => {
    const [state, setState] = useState({
        companyName: "",
        username: "",
        // studentid: "",
        // score: "",
        // course: "",
        // date: "",
        // logoURL: "",
        // regisNo: " ",


    })

    //console.log(formData) //UNDEFINED BATA RAHA YE BHI

    useEffect(() => {
        setState({
            companyName: companyName,
            username: username,
            // studentid: formData.studentid,
            // score: formData.score,
            // course: formData.course,
            // date: formData.date,
            // logoURL: formData.logoURL,
            // regisNo: formData.regisNo
        })


    }, [formData])

    console.log(state)
    console.log(companyName)


    // const onClickHandler = () => {
    //     setState({
    //         companyName: formData.companyName,
    //         username: formData.username,
    //         studentid: formData.studentid,
    //         score: formData.score,
    //         course: formData.course,
    //         date: formData.date,
    //         logoURL: formData.logoURL,
    //         regisNo: formData.regisNo
    //     })
    //     console.log(formData)

    // }
    return (
        <Fragment>

            <p>{companyName}</p>
            <p>{username}</p>


        </Fragment>
    )
};

Template1.propTypes = {
    formData: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    formData: state.template.formData,
    companyName: state.template.companyName,
    username: state.template.username
})
export default connect(mapStateToProps, {})(Template1);
