import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { addTemplate } from '../../_actions/templateAction'
import backImage from '.././images/certificateback2.jpg'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './style/temp3.css'

const Template3 = ({
    Temp3formData,
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
            companyName: Temp3formData && Temp3formData.companyName,
            username: Temp3formData && Temp3formData.username,
            studentid: Temp3formData.studentid,
            score: Temp3formData.score,
            course: Temp3formData && Temp3formData.course,
            date: Temp3formData.date,
            logoURL: Temp3formData.logoURL,
            regisNo: Temp3formData.regisNo
        })


    }, [Temp3formData])


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
                <div className="topdivmainT3" id="topdivmain">
                    <img src={backImage} className="flexbox_2T3" />
                    <div className="borderMainT3">
                        <div className="borderdottedT3">
                            <div className="container1T3">

                                <br />
                                <span className="H1T3">Certificate of Achievement </span>
                                <br />
                                <span className="H3T3">
                                    THIS CERTITICATE IS PROUDLY <br />
                                    PRESENTED FOR HONORABLY ACHIEVEMENT TO
      </span>
                                <br />
                                <br />
                                <span style={{ fontSize: 30, textTransform: "uppercase" }}>
                                    <b>{username} </b>
                                </span>
                                <br />
                                <br />
                                <span className="H3T3">
                                    HAS COMPLETED THE COURSE
      </span>

                                <br />
                                <span className="H4T3" style={{ fontSize: 30 }}><b>{course}</b></span>
                                <br />
                                <br />
                                <span className="H4T3" style={{ fontSize: 20 }}
                                >with score of-
                                        <b>{score}% </b>
                                </span>

                                <br />
                                <br />
                                <span className="H3T3">
                                    AWARDED THIS DAY OF
      </span>
                                <br />
                                <span className="H4T3" style={{ fontSize: 25 }}>
                                    <i
                                    >{date}
                                    </i>
                                </span>
                                <br />

                                <div className="bottomT3">
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
                                                    className="borderbottom1T3"
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
                                                    className="borderbottom2T3"
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
                                <div className="flexbox_1">
                                    <img src={logoURL} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>


        </Fragment>
    )
}

Template3.propTypes = {
    addTemplate: PropTypes.func.isRequired,
    Temp3formData: PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
    Temp3formData: state.template.Temp3formData,

})
export default connect(mapStateToProps, { addTemplate })(Template3);

