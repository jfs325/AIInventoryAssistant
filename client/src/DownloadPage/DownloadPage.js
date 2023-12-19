import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./DownloadPage.css";
import "../styling.css";
import Header from '../Header/Header';



const DownloadPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const location = useLocation();
  const data = location.state; // Data from InventoryForm

  const handleNavigate = async () => {
    navigate('/');  
    };
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
      <Header />
      {loading && <LoadingScreen/>}
      <div className='download-container'>
        <div className='header-text'>
          <h1>Download your CSV file:</h1>
      </div>
      {downloadUrl && <a href={downloadUrl} className="download-link" download={fileName}>Download File</a>}
      <div className='return-button'>
        <button onClick={handleNavigate} className="my-button">Return to main page</button>
      </div>
      </div>
    </div>
  );
};

export default DownloadPage;
