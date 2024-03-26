// UploadPage.js

import React, { useState } from 'react';
import './UploadPage.css';
import ImageUpload from './ImageUpload';
// import ViewPrivateImages from './ViewPrivateImages'; // Import the component for viewing private images
// import ViewPublicImages from './ViewPublicImages'; // Import the component for viewing public images



const UploadPage = ({ onNavigate }) => {

    const [publicImages, setPublicImages] = useState([]);
    const [privateImages, setPrivateImages] = useState([]);

    const handleImageUpload = (image, privacy) => {
        // Handle image upload logic here
        console.log('Uploaded image:', image);
        console.log('Privacy setting:', privacy);

        if (privacy === 'public') {
            setPublicImages([...publicImages, image]);
          } else {
            setPrivateImages([...privateImages, image]);
        }
      };

      const handleViewPublicImages = () => {
        // Navigate to the page displaying public images and pass publicImages as props
        onNavigate('view-public-images', { images: publicImages });
      };
    
      const handleViewPrivateImages = () => {
        // Navigate to the page displaying private images and pass privateImages as props
        onNavigate('view-private-images', { images: privateImages });
      };

   return (
    <div className="upload-page-container">
      <h2>Upload Page</h2>
      <ImageUpload onUpload={handleImageUpload} className = "Imageupload" />
      <div className="button-container">
        <button className="view-button" onClick={handleViewPublicImages}>View Public Images</button>
        <button className="view-button" onClick={handleViewPrivateImages}>View Private Images</button>
      </div>
    </div>
  );
};

export default UploadPage;
