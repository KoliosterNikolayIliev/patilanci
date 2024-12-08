import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../../context/AppContext";
import getCharityData from "../../services/getCharityData"
import YouTubeIframeComponent from "../YouTubeIframe";
import "./Garden.css"; // Import the CSS file

function Garden() {
    const {language} = React.useContext(AppContext);
    const {charityData, setCharityData} = useContext(AppContext);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        if (charityData.length === 0) {
            getCharityData()
                .then(response => {
                    const callData = response.data
                    setCharityData(callData)
                    console.log(callData)
                    setDataIsLoaded(true)
                })
                .catch(error =>
                    console.log(error)
                );
        }
    }, [setCharityData, charityData]);

    const parser = dataIsLoaded ? new DOMParser():undefined;
    const doc = dataIsLoaded ? parser.parseFromString(charityData[0].embedded_video, 'text/html'):undefined;
    const iframeElement = dataIsLoaded ? doc.getElementsByTagName('iframe')[0] : undefined;

    return (
        dataIsLoaded ? (<div className={'base_container'} style={{display: "block"}}>
            <h2>{language === 'en' ? charityData[0].heading_en : charityData[0].heading_bg}</h2>
            <p>
                {language === 'en' ? charityData[0].main_text_en : charityData[0].main_text_bg}
            </p>
            <img src={charityData[0].picture} alt="garden"></img>
            <div className="video-container">
                <div style={{
                    height: '40rem',
                    width: '80%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <YouTubeIframeComponent
                        style={{height: '100%'}}
                        width={'100%'}
                        height={'100%'}
                        src={iframeElement.src}
                        title={'LIVE'}
                        // allow={iframeObject.allow}
                        allowFullScreen='allowFullScreen'
                    />
                </div>
            </div>
            <h3>{language === 'en' ? charityData[0].payment_heading_en : charityData[0].payment_heading_bg}</h3>
            <div>{language === 'en' ? charityData[0].payment_text_en : charityData[0].payment_text_bg}</div>
            <div className="aligned-left">
                {(
                    language === 'en'
                        ? charityData[0].payment_info_en
                        : charityData[0].payment_info_bg
                )
                    .split(', ') // Split the text into an array based on ', '
                    .map((line, index) => (
                        <div key={index}>{line}</div> // Render each part in its own <div>
                    ))}
            </div>


        </div>) : <div className={'base_container'} style={{display: "block"}}></div>
    );
}

export default Garden;