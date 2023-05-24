import React from 'react';

const YouTubeIframeComponent = ({width, height, src, title, allow, allowFullScreen, handleItemLoad}) => {
    console.log(width)
    console.log(height)
    console.log(src)
    console.log(title)
    console.log(allow)
    console.log(allowFullScreen)
    return (
        <iframe className={'youtube_iframe'}
                onLoad={handleItemLoad}
                width={width}
                height={height}
                src={src}
                title={title}
                allow={allow}
                allowFullScreen={allowFullScreen}
        ></iframe>
    );
};

export default YouTubeIframeComponent;