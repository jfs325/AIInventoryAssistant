import React from 'react';
import "./header.css" // Import your CSS
import GPTComponent from './GPTComponent';
const Header = () => {
    return (
        <header className="site-header">
            <h1>Inventory Spreadsheet Generator</h1>
            <div className="powered-by-container"> {/* Flex container */}
                <p>AI infused Inventory tool. Powered by ChatGPT </p>
                <GPTComponent /> {/* Assuming this renders the symbol */}
            </div>
        </header>
    );
}

export default Header;