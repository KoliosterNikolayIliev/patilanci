// src/LiveSection.js

import React, { useContext } from 'react';
import {AppContext} from "../context/AppContext";


const Live = () => {
  const {youtubeLink} = useContext(AppContext);

  return (
    <div>

          <div dangerouslySetInnerHTML={{ __html: youtubeLink }} />

    </div>
  );
};

export default Live;
