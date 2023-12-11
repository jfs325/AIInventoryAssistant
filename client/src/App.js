import { useState } from "react";
import "./App.css"
import "./styling.css"
import LoadingScreen from './LoadingScreen';
import './LoadingScreen.css';

export default function EditPost() {
  // allow for change to Loading Screen
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    setLoading(true);

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Convert formData to a plain object
    const formJson = Object.fromEntries(formData.entries());
  
    const data = {
      commands: formJson['postContent'],  // Assuming 'postContent' is the name of the textarea
      title: formJson['Inventory Title'], // Assuming 'Inventory Title' is the name of the input
    };

    // POST to backend api, await response. 
       try {
          const response = await fetch('http://localhost/api/callopenai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

        // Receive CSV data from the response
      const { csv_data, title } = await response.json();

      // Convert CSV data to Blob
      const blob = new Blob([csv_data], { type: 'text/csv' });

      // Create a link element
      const link = document.createElement('a');
      // Set the link's attributes
      link.href = window.URL.createObjectURL(blob);
      link.download = `${title}_data.csv`;

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // back to main page
      setLoading(false);

      // Remove the link from the document
      document.body.removeChild(link);

      } catch {
        console.log("Error getting response");
    }
}
const defaultText = `4 cases of baked beans 16 12 ounce cans
5 boxes of almonds 8 32 ounce bags
3 more cases of baked beans`;

  return (
    <div>
      {loading && <LoadingScreen />} {/* Show loading screen when loading is true */}
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
}


