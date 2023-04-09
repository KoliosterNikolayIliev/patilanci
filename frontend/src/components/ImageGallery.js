import ImageCard from "./ImageCard";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext";
import axios from "axios";

function ImageGallery() {
    const [err, setErr] = useState(false);
    const {galleryImages, setGalleryImages} = useContext(AppContext);

    const baseUrl = 'http://127.0.0.1:8000'

    useEffect(() => {
        axios.get(baseUrl + '/api/gallery')
            .then(response => setGalleryImages(response.data))
            .catch(error => setErr(true));
    }, [setGalleryImages]);

    if (err) {
        console.log(err)
        //TODO component needed
        return <div style={{height: '83vh'}}>KUR</div>;
    }

    if (galleryImages === null) {
        return (
            //TODO component needed
            <div style={{height: '83vh'}}>
                <p>Loading...</p>
            </div>
        );
    }

    const imagesWithFullUrl = galleryImages.map(
        (image) => ({
        ...image,
        image_field_url: baseUrl + image.image_field_url
    }));
    const images1 = [
        {
            "id": 3,
            "image_field_url": "http://127.0.0.1:8000/media/images/A_New_World.jpg"
        },
        {
            "id": 5,
            "image_field_url": "http://127.0.0.1:8000/media/images/Bamboo.jpg"
        },
        {
            "id": 7,
            "image_field_url": "http://127.0.0.1:8000/media/images/Autumn.jpg"
        },
        {
            "id": 8,
            "image_field_url": "http://127.0.0.1:8000/media/images/Birds_Eye_View.jpg"
        },
        {
            "id": 9,
            "image_field_url": "http://127.0.0.1:8000/media/images/Cactus_Close_Up.jpg"
        },
        {
            "id": 10,
            "image_field_url": "http://127.0.0.1:8000/media/images/Clear_Day.jpg"
        },
        {
            "id": 11,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 12,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 13,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 14,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 15,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 16,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 17,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 18,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 19,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 20,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 21,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 22,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 23,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 24,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        },
        {
            "id": 25,
            "image_field_url": "http://127.0.0.1:8000/media/images/Flowers.jpg"
        }
    ]

    return (
        <div className="base_container image_gallery_container">
            {imagesWithFullUrl.map(image => (
                <ImageCard
                    key={image.id}
                    image={image.image_field_url}
                />
            ))}
            {/*<ImageCard

                    image={''}
                />*/}
        </div>
    );
}

export default ImageGallery;
