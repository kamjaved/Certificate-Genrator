import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { addTemplate } from '../../_actions/templateAction'
import backImage from '.././images/certificateback.jpg'
import html2canvas from "html2canvas";
import './style/temp2.css'
import jsPDF from "jspdf";

const Template2 = ({
    Temp2formData,
    addTemplate
}) => {

    const today = new Date();

    const [state, setState] = useState({

        companyName: "",
        username: "",
        studentid: "",
        score: "",
        course: "",
        date: "",
        logoURL: "",
        regisNo: " ",
        type: ""


    })

    useEffect(() => {
        setState({
            companyName: Temp2formData && Temp2formData.companyName,
            username: Temp2formData && Temp2formData.username,
            studentid: Temp2formData.studentid,
            score: Temp2formData.score,
            course: Temp2formData && Temp2formData.course,
            date: Temp2formData.date,
            logoURL: Temp2formData.logoURL,
            regisNo: Temp2formData.regisNo
        })


    }, [Temp2formData])


    const { companyName,
        username, course, studentid, score, date, logoURL, regisNo } = state

    const handleDownloadImage = element => {
        addTemplate(state);
        const elementToDownload = document.getElementById("topdivmain");
        html2canvas(elementToDownload).then((canvas) => {
            const link = document.createElement("a");
            link.setAttribute("href", canvas.toDataURL("image/png"));
            link.setAttribute("download", "downloadedImage.png");
            document.body.appendChild(link);
            link.click();
        });
    };

    const handleDownloadPDF = () => {
        addTemplate(state);
        const image = document.getElementById('topdivmain');

        html2canvas(image).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: 'landscape',
                format: "letter"
            });
            pdf.addImage(imgData, "PNG", 2, 2, 272, 207);
            pdf.save("downloadedPdf.pdf");

        })
    };


    return (
        <Fragment>
            <Helmet><title>Template 2- Globus Labs</title></Helmet>

            <section className="container">

                <div style={{ textAlign: "center" }}>
                    <button className="py-2 px-3 bg-danger text-white border-0 rounded-left font-weight-bold mt-3" onClick={handleDownloadPDF}>Download PDF</button>
                    <button className="py-2 px-3 bg-primary text-white border-0 rounded-right font-weight-bold mt-3" onClick={handleDownloadImage}>Download PNG</button>
                </div>

            </section><br /><br />

            <section className="container pb-4">
                <div className="topdivmainT2" id="topdivmain">
                    <img src={backImage} className="flexbox_2T2" />
                    <div className="borderMainT2">
                        <div className="borderdottedT2">
                            <div className="container1T2">
                                <br /><br />
                                <div className="HeadingT2">
                                    <span className="H1T2">Certificate of Achievement </span>
                                </div>
                                <br />
                                <br />
                                <div class="contentT2">
                                    <span class="H3T2" style={{ fontSize: 25 }}>
                                        This Certificate is Proudly Presented for Honorably Achievement to
                                  {username}. Which has Completed the Course of <span className="H3T2" style={{ textTransform: "lowercase" }} >{course} </span>with Score
                                  of {score}% .We Wish him with Great Future and Achivement.
                                </span>
                                </div>
                                <span className="H4T2" style={{ fontSize: 25 }} >
                                    Awarded This Day of
                               </span>
                                <br />

                                <span className="H4T2" style={{ fontSize: 25 }}>

                                    <i
                                    >{date}
                                    </i>
                                </span>

                                <div className="bottomT2">
                                    <table style={{ marginTop: 10, float: "left" }}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span style={{ textTransform: "uppercase" }}>
                                                        <b>{studentid} </b>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="borderbottom1T2"
                                                ></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "center" }}>
                                                    <span>
                                                        <b>Student ID </b>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table style={{ marginTop: 10, float: "right" }}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span>
                                                        <b>{regisNo} </b>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="borderbottom2T2"
                                                ></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "center" }}>
                                                    <span>
                                                        <b>Signature </b>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flexbox_1T2">
                                    <img src={logoURL} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>


        </Fragment>
    )
}

Template2.propTypes = {
    addTemplate: PropTypes.func.isRequired,
    Temp2formData: PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
    Temp2formData: state.template.Temp2formData,

})
export default connect(mapStateToProps, { addTemplate })(Template2);
