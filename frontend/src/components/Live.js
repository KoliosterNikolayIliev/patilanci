// src/LiveSection.js

import React, {useContext, useState,} from 'react';
import {AppContext} from "../context/AppContext";
import YouTubeIframeComponent from "./YouTubeIframe";
import LogoLoader from "./LogoLoader";


const Live = () => {
    const {youtubeLink, liveDescription, liveDescriptionBg, language} = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(liveDescriptionBg)
    const parser = new DOMParser();
    const doc = parser.parseFromString(youtubeLink, 'text/html');
    const iframeElement = doc.getElementsByTagName('iframe')[0];
    const handleItemLoad = () => {
        setIsLoading(false);
    };


    console.log(youtubeLink)
    return (
        <div className={'base_container'}>
            {!iframeElement ? <LogoLoader/> :

                <div style={{height: '40rem', width: '80%', display:'flex', alignItems:'center'}}>
                    {/*<h4>{language === 'en' ? liveDescription : liveDescriptionBg}</h4>*/}
                    <YouTubeIframeComponent
                        style={{height: '100%'}}
                        handleItemLoad={handleItemLoad}
                        width={'100%'}
                        height={'80%'}
                        src={iframeElement.src}
                        title={'LIVE'}
                        // allow={iframeObject.allow}
                        allowFullScreen='allowFullScreen'
                    />

                </div>
            }
        </div>
    );
};

export default Live;
