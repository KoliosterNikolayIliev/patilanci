import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext";
import Live from "../public/live.gif";
import getCharityData from "../services/getCharityData"

function Garden() {
    const {language} = React.useContext(AppContext);
    const {charityData, setCharityData} = useContext(AppContext);

    // headingBg
    // headingEn
    // main_textBg
    // main_textEn
    // picture
    // embeddedVideo
    // paymentHeadingBg
    // paymentHeadingEn
    // paymentTextBg
    // paymentTextEn
    // paymentInfoBg
    // paymentInfoEn
    useEffect(() => {
        if(charityData.length === 0){
          getCharityData()
            .then(response => {
                const callData = response.data
                setCharityData(callData)
                console.log(callData)
            })
            .catch(error =>
                console.log(error)
            );
        }else{
            console.log('already have it')
        }
    },[setCharityData]);


    return (
        <div className={'base_container'} style={{display: "block"}}>
            <h2>{language === 'en' ? '"Garden INSPIRATION" gives an opportunity to 15 disadvantaged young people to develop work habits in a natural environment.' : '„Градина ВДЪХНОВЕНИЕ“ дава шанс на 15 младежи в неравностойно положение да развиват трудови навици сред природата.'}</h2>
            <div style={{color:"red"}}>Ако трябва да се сменя, трябва да се направи комуникация с бекенда</div>
            <h3>Примерна снимка</h3>
            <img src={Live}></img>
            <iframe width="1148" height="646" src="https://www.youtube.com/embed/X0U1tGTyvmg"
                    title="ЗАВЕТЪТ на УЧИТЕЛЯ Петър Дънов с Андрей Грива" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
            <h3>„Градина ВДЪХНОВЕНИЕ“ има нужда от финансова помощ:</h3>
            <div>ДАРИ</div>
            <div>Банкова сметка - lorem ipsum </div>
            <div>Основание: „Градината“-дарение</div>
            <div>Револют - lorem ipsum</div>

        </div>
    );
}

export default Garden;