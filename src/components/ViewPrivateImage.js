// ViewPrivateImages.js
import React from 'react';

const ViewPrivateImages = ({ location }) => {
  const privateImages = location.state.images;

  return (
    <div>
      <h2>View Private Images</h2>
      {/* Render privateImages here */}
    </div>
  );
};

export default ViewPrivateImages;
