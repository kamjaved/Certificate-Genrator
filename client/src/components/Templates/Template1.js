import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { addTemplate } from '../../_actions/templateAction'
import border3 from '.././images/border3.png'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './style/temp1.css'


const Template1 = ({
    Temp1formData,
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
            companyName: Temp1formData && Temp1formData.companyName,
            username: Temp1formData && Temp1formData.username,
            studentid: Temp1formData.studentid,
            score: Temp1formData.score,
            course: Temp1formData && Temp1formData.course,
            date: Temp1formData.date,
            logoURL: Temp1formData.logoURL,
            regisNo: Temp1formData.regisNo
        })


    }, [Temp1formData])


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
            pdf.addImage(imgData, "PNG", 3, 3, 272, 207);
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
                <div className="topdivmainT1" id="topdivmain">
                    <img src={border3} className="flexbox_2T1" />
                    <div className="borderMainT1">
                        <div className="borderdottedT1">
                            <div className="container1T1">
                                <div className="flexbox_1T1">
                                    <img src={logoURL} />
                                </div>
                                <br />
                                <span className="H1T1">Certificate of Achievement </span>
                                <br />
                                <br />
                                <span className="H3T1">
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
                                <span className="H3T1">
                                    HAS COMPLETED THE COURSE
              </span>

                                <br />
                                <span style={{ fontSize: 30 }}>{course} </span>
                                <br />
                                <br />
                                <span style={{ fontSize: 20 }}
                                >with score of
                <b>{score}% </b>
                                </span>

                                <br />
                                <br />
                                <span className="H3T1">
                                    AWARDED THIS DAY OF
              </span>
                                <br />
                                <span>
                                    <i
                                    >{date}
                                    </i>
                                </span>
                                <br />

                                <div className="bottom">
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
                                                    className="borderbottom1T1"
                                                ></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "center" }}>
                                                    <span>
                                                        <b>Student ID</b>
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
                                                    className="borderbottom2T1"
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
                            </div>
                        </div>
                    </div>
                </div></section>


        </Fragment>
    )
}

Template1.propTypes = {
    addTemplate: PropTypes.func.isRequired,
    Temp1formData: PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
    Temp1formData: state.template.Temp1formData,

})
export default connect(mapStateToProps, { addTemplate })(Template1);

//`${today.getDate()}. ${today.getMonth() + 1}.${today.getFullYear()}.`