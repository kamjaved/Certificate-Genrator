import React from "react";
import ReactDOM from "react-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canvas: null };
  }
  handleGenerateCanvas = () => {
    html2canvas(document.body).then(function (canvas) {
      document.body.appendChild(canvas);
    });
  };

  handleDownloadImage = element => {
    const elementToDownload = document.getElementById("superid");
    html2canvas(elementToDownload).then(function (canvas) {
      document.body.appendChild(canvas);

      const link = document.createElement("a");
      link.setAttribute("href", canvas.toDataURL("image/png"));
      link.setAttribute("download", "downloadedImage.png");
      document.body.appendChild(link);
      link.click();
    });
  };

  handleDownloadPDF = () => {
    html2canvas(document.body).then(function (canvas) {
      document.body.appendChild(canvas);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [12, 9]
      });
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("downloadedPdf.pdf");
    });
  };

  render() {
    return (
      <div className="App">
        <h1 id="superid">Generating and downloading PDF/PNG</h1>
        <p>Hello, World!</p>
        <h3>Download PDF steps:</h3>
        <p>- use "html2Canvas" to generate a canvas</p>
        <p>- generate image/png using toDataURL function</p>
        <p>- use "jsPDF" library to add the image and download the PDF</p>
        <h3>Download PNG steps:</h3>
        <p>- use "html2Canvas" to generate a canvas</p>
        <p>- generate image/png using toDataURL function</p>
        <p>
          - create anchor element (a), append image data in "href" property and
          download PNG
        </p>
        <button onClick={this.handleGenerateCanvas}>Generate canvas</button>
        <button onClick={this.handleDownloadPDF}>Download PDF</button>
        <button onClick={this.handleDownloadImage}>Download Image</button>
        <h2>Canvas generated:</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { clearTemplate } from '../../_actions/templateAction';
import PropTypes from "prop-types";


export const Template1 = ({
  Temp1formData,
  template, auth
  //companyName, username
}) => {
  const [state, setState] = useState({
    companyName: "",
    username: "",
    course: ""
    // studentid: "",
    // score: "",
    // course: "",
    // date: "",
    // logoURL: "",
    // regisNo: " ",


  })


  console.log(auth) //UNDEFINED BATA RAHA YE BHI

  useEffect(() => {
    setState({
      companyName: Temp1formData && Temp1formData.companyName,
      username: Temp1formData && Temp1formData.username,
      // studentid: Temp1formData.studentid,
      // score: Temp1formData.score,
      course: Temp1formData && Temp1formData.course,
      // date: Temp1formData.date,
      // logoURL: Temp1formData.logoURL,
      // regisNo: Temp1formData.regisNo
    })


  }, [Temp1formData])


  const { companyName,
    username, course } = state

  // const onClickHandler = () => {
  //     setState({
  //         companyName: Temp1formData.companyName,
  //         username: Temp1formData.username,
  //         studentid: Temp1formData.studentid,
  //         score: Temp1formData.score,
  //         course: Temp1formData.course,
  //         date: Temp1formData.date,
  //         logoURL: Temp1formData.logoURL,
  //         regisNo: Temp1formData.regisNo
  //     })
  //     console.log(Temp1formData)

  // }
  return (
    <Fragment>

      <h1>{companyName}{username} {course}</h1>
    </Fragment>
  )
};

Template1.propTypes = {
  Temp1formData: PropTypes.object.isRequired,
  template: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  Temp1formData: state.template.Temp1formData,
  template: state.template,
  auth: state.auth.user,
  companyName: state.template.companyName,
  username: state.template.username
})
export default connect(mapStateToProps)(Template1);
