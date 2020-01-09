import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet';
import '../Templates/style/temp4.css'
import backImage from '../images/certificateback2.jpg'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Template5 = () => {

    const today = new Date();

    const [state, setState] = useState({

        username: "Kamran javed",
        studentid: "BKID0954F",
        score: "70",
        course: "MERN STACK",
        date: "21-10-2018",
        logoURL: "",
        regisNo: " ",
        type: "MERN STACK"


    })

    const handleDownloadImage = element => {
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
                <div className="topdivmain" id="topdivmain">
                    <img src={backImage} className="flexbox_2" />
                    <div className="borderMain">
                        <div className="borderdotted">
                            <div className="container1">

                                <br />
                                <span className="H1">Certificate of Achievement </span>
                                <br />
                                <span className="H3">
                                    THIS CERTITICATE IS PROUDLY <br />
                                    PRESENTED FOR HONORABLY ACHIEVEMENT TO
      </span>
                                <br />
                                <br />
                                <span style={{ fontSize: 30, textTransform: "uppercase" }}>
                                    <b>{state.username} </b>
                                </span>
                                <br />
                                <br />
                                <span className="H3">
                                    HAS COMPLETED THE COURSE
      </span>

                                <br />
                                <span className="H4" style={{ fontSize: 30 }}><b>{state.course}</b></span>
                                <br />
                                <br />
                                <span className="H4" style={{ fontSize: 20 }}
                                >with score of-
                                        <b>{state.score}% </b>
                                </span>

                                <br />
                                <br />
                                <span className="H3">
                                    AWARDED THIS DAY OF
      </span>
                                <br />
                                <span className="H4" style={{ fontSize: 25 }}>
                                    <i
                                    >{`${today.getDate()}. ${today.getMonth() + 1}.
          ${today.getFullYear()}.`}
                                    </i>
                                </span>
                                <br />

                                <div className="bottom">
                                    <table style={{ marginTop: 10, float: "left" }}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span style={{ textTransform: "uppercase" }}>
                                                        <b>{state.studentid} </b>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="borderbottom1"
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
                                                        <b>{state.course} </b>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className="borderbottom2"
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
                                    <img src="https://www.globuslabs.com/images/logo1.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>


        </Fragment>
    )
}

export default Template5
