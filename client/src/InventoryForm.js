import React, { useState } from 'react';
import LoadingScreen from './LoadingScreen';

const defaultText = 
`4 cases of baked beans 16 12 ounce cans
 5 boxes of almonds 8 32 ounce bags
 3 more cases of baked beans`;

const InventoryForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const data = {
      commands: formJson['postContent'],
      title: formJson['Inventory Title'],
    };

    try {
      const response = await fetch('http://localhost/api/callopenai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    // generate CSV file from data
    const { csv_data, title } = await response.json();
    const blob = new Blob([csv_data], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${title}_data.csv`;
    document.body.appendChild(link);
    
    // Trigger a click on the link to start the download
    link.click();

    } catch {
      console.log("Error getting response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <LoadingScreen />}
      <form method="post" onSubmit={handleSubmit}>
        <div className="title-container">
          <label>
            <div className="header-spacing">
              <h4>Inventory Title:</h4>
            </div>
            <input name="Inventory Title" defaultValue="Inventory" />
          </label>
        </div>
        <hr />
        <div className="text-container">
          <h2>Dictate or type your inventory commands here:</h2>
          <textarea
            name="postContent"
            defaultValue={defaultText}
            rows={60}
            cols={35}
          />
        </div>
        <hr />
        <button type="reset">Reset edits</button>
        <button type="submit">Save post</button>
      </form>
    </div>
  );
};

export default InventoryForm;
