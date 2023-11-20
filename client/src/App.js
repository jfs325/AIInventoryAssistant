import "./App.css"
export default function EditPost() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Convert formData to a plain object
    const formJson = Object.fromEntries(formData.entries());
    
    const data = {
      commands: formJson['postContent'],  // Assuming 'postContent' is the name of the textarea
      title: formJson['Inventory Title'], // Assuming 'Inventory Title' is the name of the input
    };

    // You can pass formData as a fetch body directly:
    fetch('http://localhost/api/callopenai', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

    console.log("commands submitted");
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="title-container">
      <label>
      <div className="header-spacing">
        <h4>Inventory Title:</h4> 
        </div>
        <input name="Inventory Title" defaultValue="Biking" />
      </label>
      </div>
      <hr />
      <div className="text-container">
        <h2>Dictate or type your inventory commands here:</h2>
        <textarea
          name="postContent"
          defaultValue="I really enjoyed biking yesterday!"
          rows={60}
          cols={35}
        />
      </div>
      <hr />
      <button type="reset">Reset edits</button>
      <button type="submit">Save post</button>
    </form>
  );
}


