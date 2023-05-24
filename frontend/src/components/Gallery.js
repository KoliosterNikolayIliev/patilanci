import ContentCard from "./ContentCard";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext";
import axios from "axios";

function Gallery({content}) {
    const [err, setErr] = useState(false);
    const {images, setImages} = useContext(AppContext);
    const {videos, setVideos} = useContext(AppContext);
    // TODO - must be put in .env
    const baseUrl = 'http://127.0.0.1:8000'
    const endpoint = content === 'images' ? '/api/image_gallery' : '/api/video_gallery'
    useEffect(() => {
        axios.get(baseUrl + endpoint)
            .then(response => content === 'images' ? setImages(response.data) : setVideos(response.data))
            .catch(error => setErr(true));
    }, [setImages, endpoint]);

    if (err) {
        console.log(err)
        //TODO component needed
        return <div style={{height: '83vh'}}>KUR</div>;
    }
    const items = content === 'images' ? images : videos
    if (items === null) {
        return (
            //TODO component needed
            <div style={{height: '83vh'}}>
                <p>Loading...</p>
            </div>
        );
    }
    let itemsWithFullUrl = items
    if (content === 'images') {
        itemsWithFullUrl = items.map(
            (image) => ({
                ...image,
                image_field_url: baseUrl + image.image_field_url
            }));
    }


    itemsWithFullUrl.sort((a, b) => {
        const playNameA = a.play_name.toLowerCase();
        const playNameB = b.play_name.toLowerCase();

        if (playNameA < playNameB) {
            return -1;
        }
        if (playNameA > playNameB) {
            return 1;
        }
        return 0;
    });

    return (
        <div className={'base_container'}>
            <div className="gallery_container">
                {itemsWithFullUrl.map(item => (
                    <ContentCard
                        key={item.id}
                        item={content === 'images' ? item.image_field_url : item.embedded_video}
                        description={item.description}
                        playName={item.play_name}
                        playNameBg={item.play_name_bg}
                        descriptionBg={item.description_bg}
                        content={content}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
