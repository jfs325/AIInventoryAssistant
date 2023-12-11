// DownloadButton.js
import React from "react";

const DownloadButton = ({ downloadLink }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadLink.link;
    link.download = `${downloadLink.title}_data.csv`;
    link.click();
  };

  return (
    <div>
      <p>Your CSV file is ready for download!</p>
      <button onClick={handleDownload}>Download CSV</button>
    </div>
  );
};

export default DownloadButton;