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
