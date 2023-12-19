import React from "react";
import { useNavigate } from "react-router-dom";
import "./TutorialHeader.css"

const TutorialHeader = () => {
    const navigate = useNavigate();
    const handleNavigateToMain = () => {
      navigate('/'); // Redirect to the tutorial page
      };
      
    return (
        <header className="site-header">
            <div className="header-content">
            <button className="left-button" onClick={handleNavigateToMain}> Main Page</button>
            <h1>Tutorial / Documentation</h1>
            <div className="spacer"/>
            </div>
            <div className="powered-by-container"> {/* Flex container */}
                <p>Explanation and examples of using the application </p>
            </div>
        </header>
    );
}

export default TutorialHeader; 