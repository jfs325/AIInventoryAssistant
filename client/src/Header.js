import React from 'react';
import "./header.css" // Import your CSS
import GPTComponent from './GPTComponent';
const Header = () => {
    return (
        <header className="site-header">
            <h1>AI Powered Inventory Tracker</h1>
            <div className="powered-by-container"> {/* Flex container */}
                <p>You give commands. We return you a csv of everything you told. Powered by chatGPT </p>
                <GPTComponent /> {/* Assuming this renders the symbol */}
            </div>
        </header>
    );
}

export default Header;