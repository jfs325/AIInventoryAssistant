// DownloadPage.js
import React from "react";
import DownloadButton from "./DownloadButton";

const DownloadPage = ({ downloadLink }) => {
  return (
    <div>
      <p>Your CSV file is ready for download!</p>
      <DownloadButton downloadLink={downloadLink} />
    </div>
  );
};

export default DownloadPage;

