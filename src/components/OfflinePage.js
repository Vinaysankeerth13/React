import React from 'react';

const OfflinePage = () => {
  return (
    <div className="offline-container">
      <h1 className="offline-title">Uh oh! You seem to be offline.</h1>
      <p className="offline-message">
        The content you requested is currently unavailable. Don't worry,
        come back when you're connected and you'll be good to go!
      </p>
    </div>
  );
};

export default OfflinePage;
