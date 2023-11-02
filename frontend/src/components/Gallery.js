import ContentCard from "./ContentCard";
import noImage from '../public/no_image.png'
import {Container, Row, Col} from 'react-bootstrap';
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext";
import axios from "axios";

function Gallery({content}) {
    const [err, setErr] = useState(false);
    const {images, setImages} = useContext(AppContext);
    const {videos, setVideos} = useContext(AppContext);
    const {plays, setPlays} = useContext(AppContext);
    // TODO - must be put in .env
    const baseUrl = 'http://127.0.0.1:8000'
    const paths = {
        'images': '/api/image_gallery',
        'videos': '/api/video_gallery',
        'projects': '/api/plays'
    }
    // const endpoint = '/api/plays'
    const endpoint = paths[content]
    useEffect(() => {
        // TODO - stop requests when cached
        if(
            content === 'images' && !images ||
            content === 'videos' && !videos ||
            content === 'projects' && !plays
        ){
            console.log('here')
        axios.get(baseUrl + endpoint)
            .then(response => {
                console.log('response')
                console.log(response)
                if (content === 'images') {
                    setImages(response.data)
                } else if (content === 'videos') {
                    setVideos(response.data)
                } else if (content === 'projects'){
                    setPlays(assembleUrls(response.data))
                }
            })
            .catch(error => setErr(true));
        }
    }, [setImages, setVideos, endpoint, content]);
    console.log(plays)
    if (err) {
        console.log(err)
        //TODO component needed
        return <div className={'inner_main_container'}>KUR</div>;
    }
    const _items = {
        'images':images,
        'videos':videos,
        'projects':plays
    }
    const items = _items[content]
    if (items === null) {
        return (
            //TODO component needed
            <div className={'inner_main_container'}>
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

    function assembleUrls(plays) {
        let projects = plays;
        projects = projects.map((play) => {
            if (play.poster_url !== "no_image") {
                return {
                    ...play,
                    poster_url: baseUrl + play.poster_url
                };
            }
            return play; // If poster_url is "no_image", don't change it
        });
        return projects;
    }
    console.log(itemsWithFullUrl)
    return (
        <div className={'base_container'}>
            <Container>
                <Row>
                    {itemsWithFullUrl.map(item => (
                        <Col key={item.id} xs={12} sm={6} md={3} style={{marginBottom: '1.5rem'}}>
                            <ContentCard
                                key={item.id}
                                item={content === 'images'? item.image_field_url :
                                    (content === 'projects'?(item.poster_url!=='no_image'?item.poster_url:noImage):item.embedded_video)}
                                description={item.description}
                                playName={item.play_name}
                                playNameBg={item.play_name_bg}
                                descriptionBg={item.description_bg}
                                content={content}
                                date={item.next_play}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Gallery;
