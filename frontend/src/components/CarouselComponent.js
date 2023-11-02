import LogoLoader from './LogoLoader';
import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import CarouselBase from "./CarouselBase";
import {AppContext} from "../context/AppContext";

function CarouselComponent() {
    const [err, setErr] = useState(false);
    const {carouselImages, setCarouselImages} = useContext(AppContext);

    // TODO - in services!!!
    const baseUrl = 'http://127.0.0.1:8000'
    useEffect(() => {
        axios.get(baseUrl + '/api/carousel')
            .then(response => setCarouselImages(response.data))
            .catch(error => setErr(true));
    }, [setCarouselImages]);

    if (err) {
        console.log(err)
        //TODO component needed
        return <div className={'inner_main_container'}>KUR</div>;
    }

    if (carouselImages === null) {
        return (
            //TODO component needed
            <div className={'inner_main_container'}>
                <LogoLoader/>
            </div>
        );
    }

    const imagesWithFullUrl = carouselImages.map(
        (image) => ({
        ...image,
        image_field_url: baseUrl + image.image_field_url
    }));

    return (
        <div className={'main_container'}>
            <CarouselBase images={imagesWithFullUrl}/>
        </div>
    );
}

export default CarouselComponent



