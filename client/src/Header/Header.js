import React from 'react';
import "./header.css" // Import your CSS
import GPTComponent from './GPTComponent';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleNavigateToTutorial = () => {
        navigate('/tutorial'); // Redirect to the tutorial page
      };

    return (

        <header className="site-header">
            <div className="header-content">
            <button className="left-button" onClick={handleNavigateToTutorial}>Tutorial</button>
            <h1>Inventory Spreadsheet Generator</h1>
            <div className="spacer"></div>
            </div>
            <div className="powered-by-container"> {/* Flex container */}
                <p>AI infused Inventory tool. Powered by ChatGPT </p>
                <GPTComponent /> {/* Assuming this renders the symbol */}
            </div>
        </header>
    );
}

export default Header;