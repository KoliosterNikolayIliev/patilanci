import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import {AppContext} from "../context/AppContext";


function CarouselBase({images}) {
    const { language } = React.useContext(AppContext);
    // ADD PERFORMANCE TO SLIDE
    // console.log(images)
    return (
        <Carousel
            fade
            interval={3000}
            style={{zIndex:0}}
        >
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={image.image_field_url}
                        alt={`Slide ${index + 1}`}
                    />
                    <Carousel.Caption>
                        <h3>{language === 'en' ? image.play_name : image.play_name_bg}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselBase;
