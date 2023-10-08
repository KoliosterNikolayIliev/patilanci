import noImage from '../public/no_image.png'
import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import {useContext} from "react";
import {AppContext} from "../context/AppContext";

const PlayArticle = ({name, name_bg, description, description_bg, next_play, poster_url}) => {
    const {language} = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    if (poster_url === "no_image") {
        poster_url = noImage
    }

    const handleItemLoad = () => {
        setIsLoading(false);
    };

    return (
        <Card>
            {isLoading && (
                        <div className="custom_spinner_container">
                            <div className="custom_spinner"></div>
                        </div>
                    )}
            <Card.Img
                variant="top" src={poster_url}
                className="custom_img_card_img"
                style={{opacity: isLoading ? 0 : 1,}}
                onLoad={handleItemLoad}
            />
            <Card.Body>
                <Card.Title>{language === 'en' ? name : name_bg}</Card.Title>
                <Card.Text>{language === 'en' ? description : description_bg}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{next_play}</small>
            </Card.Footer>
        </Card>
    );
};

export default PlayArticle;