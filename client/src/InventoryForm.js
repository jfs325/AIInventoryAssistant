import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./App.css";

const defaultText = 
`4 cases of baked beans 16 12 ounce cans
 5 boxes of almonds 8 32 ounce bags
 3 more cases of baked beans`;

const InventoryForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const data = {
      commands: formJson['postContent'],
      title: formJson['Inventory Title'],
    };
    navigate('/download', {state: {data}});  
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="title-container">
          <label>
            <div className="header-spacing">
              <h4>Inventory Title:</h4>
            </div>
            <input name="Inventory Title" defaultValue="Inventory" />
          </label>
        </div>
        <div className="text-container">
          <h2>Dictate or type your inventory commands here:</h2>
          <textarea
            name="postContent"
            defaultValue={defaultText}
            rows={50}
            cols={20}
          />
        </div>
        <button type="reset">Reset edits</button>
        <div class="button-container">
          <button className="my-button">Submit Commands</button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;