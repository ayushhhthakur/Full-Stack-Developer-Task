import React, { useState } from 'react';
import axios from 'axios';

function OverlayForm() {
  const [position, setPosition] = useState('');
  const [size, setSize] = useState('');
  const [content, setContent] = useState('');
  const [logo, setLogo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!position || !size || !content || !logo) {
      setError('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('position', position);
    formData.append('size', size);
    formData.append('content', content);
    formData.append('logo', logo);

    try {
      setLoading(true);

      const response = await axios.post('http://127.0.0.1:5000/api/overlays', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Overlay created successfully:', response.data);
      
      // Reset the form after successful submission
      setPosition('');
      setSize('');
      setContent('');
      setLogo(null);
      setError(null);
    } catch (error) {
      // Handle errors
      setError('Error creating overlay. Please try again.');
      console.error('Error creating overlay:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  return (
    <div>
      <h2>Overlay Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Position:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
        </label>
        <br />
        <label>
          Size:
          <input type="text" value={size} onChange={(e) => setSize(e.target.value)} required />
        </label>
        <br />
        <label>
          Content:
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <br />
        <label>
          Logo:
          <input type="file" accept="image/*" onChange={handleLogoChange} required />
        </label>
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating Overlay...' : 'Create Overlay'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default OverlayForm;
