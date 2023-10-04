// src/LiveSection.js

import React, { useEffect, useState } from 'react';

const Live = () => {
  const [youtubeLink, setYoutubeLink] = useState(null);
  let ws = null;

  useEffect(() => {
    // Replace 'your_secret_key_here' with your actual secret key
    const secretKey = '111';
    ws = new WebSocket(`ws://localhost:8000/ws/live-stream/?key=${secretKey}`);
    console.log(ws)
    ws.onopen = () => {
      console.log('WebSocket connected.');
    };

    ws.onmessage = (event) => {
      console.log('hereherehere')
      const data = JSON.parse(event.data);
      console.log(data)
      setYoutubeLink(data.youtube_link);
    };

    ws.onclose = () => {
      console.log('WebSocket closed.');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      // Close the WebSocket connection when the component is unmounted
      ws.close();
    };
  }, []);

  return (
    <div>
      {youtubeLink ? (
          <div dangerouslySetInnerHTML={{ __html: youtubeLink }} />
      ) : (
        <p>No live stream available.</p>
      )}
    </div>
  );
};

export default Live;
