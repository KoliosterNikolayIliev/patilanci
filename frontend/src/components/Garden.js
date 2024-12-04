import React from "react";
import {AppContext} from "../context/AppContext";
import Live from "../public/live.gif";

function Garden() {
    const {language} = React.useContext(AppContext);
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