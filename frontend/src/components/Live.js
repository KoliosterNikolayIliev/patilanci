// src/LiveSection.js

import React, { useContext, useEffect} from 'react';
import {AppContext} from "../context/AppContext";
import getLiveVideo from "../services/getLiveVideo"


const Live = () => {
  const {youtubeLink} = useContext(AppContext);

  useEffect(() => {
        getLiveVideo()
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }, []);

  return (
    <div>

          <div dangerouslySetInnerHTML={{ __html: youtubeLink }} />

    </div>
  );
};

export default Live;
