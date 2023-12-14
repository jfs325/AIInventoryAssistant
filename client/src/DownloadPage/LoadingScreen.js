// LoadingScreen.js
import React from 'react';
import Spinner from './Spinner';
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Spinner/>
      <p>Processing your commands and generating CSV...</p>
    </div>
  );
};

export default LoadingScreen;