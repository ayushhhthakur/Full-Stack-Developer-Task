// /frontend/src/components/OverlayForm.js
import React, { useState } from 'react';
import axios from 'axios';

function OverlayForm() {
  // State for form inputs
  const [position, setPosition] = useState('');
  const [size, setSize] = useState('');
  const [content, setContent] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an overlay object with form data
    const overlayData = {
      position,
      size,
      content,
    };

    try {
      // Send a POST request to the backend to create the overlay
      const response = await axios.post('http://127.0.0.1:5000/api/overlays', overlayData);

      // Handle the response or update the UI as needed
      console.log('Overlay created successfully:', response.data);
      
      // You may want to reset the form after successful submission
      setPosition('');
      setSize('');
      setContent('');
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error creating overlay:', error.message);
    }
  };

  return (
    <div>
      <h2>Overlay Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Position:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </label>
        <br />
        <label>
          Size:
          <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Overlay</button>
      </form>
    </div>
  );
}

export default OverlayForm;
