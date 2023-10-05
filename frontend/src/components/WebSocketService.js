import { useState, useEffect, useContext} from 'react';
import {AppContext} from "../context/AppContext";

function WebSocketService({ secretKey }) {
  const [ws, setWs] = useState(null);
  const {setYoutubeLink} = useContext(AppContext);
  useEffect(() => {
    if (!ws) {
      // Create a new WebSocket connection when ws is null
      const newWs = new WebSocket(`ws://localhost:8000/ws/live-stream/?key=${secretKey}`);
      newWs.onopen = () => {
        console.log('WebSocket connected.');
      };
      newWs.onmessage = (event) => {
        console.log('hereherehere');
        console.log(event)
        const link = JSON.parse(event.data).youtube_link
        if (link === "unavailable"){
            setYoutubeLink(null)
        }else{
            setYoutubeLink(link)
        }
        // Handle WebSocket messages here
      };
      newWs.onclose = () => {
        console.log('WebSocket closed.');
      };
      newWs.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      setWs(newWs);
    }

    // Cleanup function
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [secretKey, ws]);

  // You can expose the WebSocket instance or its methods if needed
  return ws;
}

export default WebSocketService;
