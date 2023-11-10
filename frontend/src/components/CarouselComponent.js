import LogoLoader from './LogoLoader';
import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import CarouselBase from "./CarouselBase";
import {AppContext} from "../context/AppContext";

function CarouselComponent() {
    const [err, setErr] = useState(false);
    const {carouselImages, setCarouselImages} = useContext(AppContext);

    const baseUrl = `${process.env.REACT_APP_API_BASE_URL}`
    useEffect(() => {
        if (!carouselImages) {
            axios.get(baseUrl + `${process.env.REACT_APP_API_CAROUSEL}`)
                .then(response => setCarouselImages(response.data))
                .catch(error => setErr(true));
        }

    }, [carouselImages,setCarouselImages, baseUrl]);

    if (err) {
        console.log(err)
        return <div className={'inner_main_container'}>
            <LogoLoader/>
        </div>;
    }

    if (carouselImages === null) {
        return (
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



