// ImageUpload.js
import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [privacy, setPrivacy] = useState('public');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      setSelectedFile(file);
      setErrorMessage('');
    } else {
      setSelectedFile(null);
      setErrorMessage('Please select a valid image file (JPEG, PNG, JPG, etc.)');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile, privacy);
      setSelectedFile(null);
    } else {
      setErrorMessage('Please select an image to upload');
    }
  };

  return (
    <div className="image-upload-container">
      <div className="file-input">
        <p>Choose your file:</p>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className="privacy-options">
        <p>Upload image:</p>
        <label>
          <input type="radio" name="privacy" value="public" checked={privacy === 'public'} onChange={() => setPrivacy('public')} />
          Public
        </label>
        <label>
          <input type="radio" name="privacy" value="private" checked={privacy === 'private'} onChange={() => setPrivacy('private')} />
          Private
        </label>
      </div>
      <button onClick={handleUpload}>Upload</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ImageUpload;
