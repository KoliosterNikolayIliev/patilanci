// src/LiveSection.js

import React, { useContext,} from 'react';
import {AppContext} from "../context/AppContext";



const Live = () => {
    const {youtubeLink, liveDescription, liveDescriptionBg, language} = useContext(AppContext);
    console.log(liveDescriptionBg)


  return (
    <div>

          <div dangerouslySetInnerHTML={{ __html: youtubeLink }} />
          <div>{language==='en'?liveDescription:liveDescriptionBg}</div>


    </div>
  );
};

export default Live;
