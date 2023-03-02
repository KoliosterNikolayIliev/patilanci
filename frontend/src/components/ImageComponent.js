import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UncontrolledExample from "./Carousel";

function ImageComponent() {
    const [images, setImages] = useState(null);

    const baseUrl = 'http://127.2.0.1:8001'

    useEffect(() => {
        axios.get('http://127.2.0.1:8001/api/carousel')
            .then(response => setImages(response.data))
            .catch(error => console.error(error));
    }, []);

    if (images === null) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <UncontrolledExample url={baseUrl + images[0].image_field_url}/>
        </div>
    );
}

// <img src={'http://127.2.0.1:8001' + urlData[0]} alt="My " />
export default ImageComponent

            // {/*{images.map((image) => (*/}
            // {/*    <img key={image.id} src={baseUrl + image.image_field_url} alt={`${image.id}`}/>*/}
            // {/*))}*/}