import React from 'react';
import "./header.css" // Import your CSS

const Header = () => {
    return (
        <header className="site-header">
            <h1>AI Powered Inventory Tracker</h1>
            <p>You give commands. We return you a csv of everything you told. Powered by chatGPT</p>
        </header>
    );
}

export default Header;