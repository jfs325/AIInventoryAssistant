import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import { useState } from 'react';

const DownloadPage = () => {
  const [loading, setLoading] = useState(true);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const location = useLocation();
  const data = location.state; // Data from InventoryForm

  useEffect(() => {
    processCommands();
  }, []);

  const processCommands = async (e) => {
    try {
      const response = await fetch('http://localhost/api/callopenai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data.data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    // generate CSV file from data
    const { csv_data, title } = await response.json();
    const blob = new Blob([csv_data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    setDownloadUrl(url);
    setFileName(`${title}_data.csv`);
    setLoading(false);
    } catch (error) {
      console.log("Error processing data: ", error);
    }
  }
  return (
    <div>
      {loading && <LoadingScreen/>}
      <h1>Download your CSV file</h1>
      {downloadUrl && <a href={downloadUrl} download={fileName}>Download File</a>}
    </div>
  );
};

export default DownloadPage;
