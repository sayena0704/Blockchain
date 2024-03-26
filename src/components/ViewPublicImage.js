// ViewPublicImages.js
import React from 'react';

const ViewPublicImages = ({ location }) => {
  const publicImages = location.state.images;

  return (
    <div>
      <h2>View Public Images</h2>
      {/* Render publicImages here */}
    </div>
  );
};

export default ViewPublicImages;

