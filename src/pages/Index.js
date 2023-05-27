import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

function Index() {
  const [url, setUrl] = useState("");
  const baseUrl = window.location.origin.toString() + url;
  const [author, setAuthor] = useState("");
  const [poemTitle, setPoemTitle] = useState("");
  const [poem, setPoem] = useState("");
  const [qrBgColor, setqrBgColor] = useState("#ffffff");
  const [qrFillColor, setqrFillColor] = useState("#000000");

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlePoemChange = (e) => {
    setPoem(e.target.value);
  };

  const handlePoemTitleChange = (e) => {
    setPoemTitle(e.target.value);
  };

  const handleqrBgColor = (e) => {
    setqrBgColor(e.target.value);
  };

  const handleqrFillColor = (e) => {
    setqrFillColor(e.target.value);
  };

  const qrCodeEncoder = (e) => {
    e.preventDefault();
    let baseUrl = `${window.location.origin.toString()}`;
    baseUrl = `${baseUrl}/view?author=${encodeURIComponent(
      author
    )}&poem=${encodeURIComponent(poem)}`;

    if (author && poem) {
      setUrl(baseUrl);
    }

    if (poemTitle) {
      setUrl(baseUrl + `&title=${encodeURIComponent(poemTitle)}`);
    }
  };

  const handleDownload = () => {
    const svgElement = document.getElementById("qr-code");
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${author}-qrcode.svg`;
    link.click();
  };

  return (
    <div className="container-wrapper">
      <Navbar />
      <main>
        <div className="form-header">
          <p>
            Submit the form below to generate a new code. Clicking on the code
            will link you to the page where it's displayed.
          </p>
        </div>
        <form onSubmit={qrCodeEncoder}>
          <input
            id="poem-title"
            type="text"
            onChange={handlePoemTitleChange}
            placeholder="Poem Title (Optional)"
          />
          <input
            id="poem-author"
            type="text"
            onChange={handleAuthorChange}
            placeholder="Poem Author"
          />
          <textarea
            id="poem-text"
            onChange={handlePoemChange}
            placeholder="Poem Text"
            value={poem}
            style={{ whiteSpace: "pre-wrap", resize: "vertical" }} // Added resize style
          />
          <div className="text-white flex flex-col gap-6 pt-4">
            <h2>QR Code Customization</h2>
            <div className="flex align-center gap-4 justify-between">
              <label htmlFor="qr-fill">Fill Color</label>
              <input
                className="w-1/3"
                type="color"
                id="qr-fill"
                name="qr-fill"
                value={qrFillColor}
                onChange={handleqrFillColor}
              />
            </div>
            <div className="flex align-center gap-4 justify-between">
              <label htmlFor="qr-bg">Background Color</label>
              <input
                className="w-1/3"
                type="color"
                id="qr-bg"
                name="qr-bg"
                value={qrBgColor}
                onChange={handleqrBgColor}
              />
            </div>
          </div>
          <button
            className="text-white border border-white hover:bg-gray-800 transition-all duration-200"
            onSubmit={qrCodeEncoder}
          >
            Generate
          </button>
        </form>
        <div className="flex flex-col justify-center gap-6 pt-4">
          <Link to={url}>
            <QRCodeSVG
              id="qr-code"
              bgColor={qrBgColor}
              fgColor={qrFillColor}
              value={baseUrl}
            />
          </Link>
          <button
            className="border-white max-w-sm  border mx-auto w-full px-4 py-2 text-sm hover:bg-gray-800 transition-all duration-200"
            onClick={handleDownload}
          >
            Download QR as SVG
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
