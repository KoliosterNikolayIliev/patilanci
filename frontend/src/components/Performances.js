import PlayArticle from './PlayArticle'
import {Container, Row, Col} from 'react-bootstrap';
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext";
import axios from "axios";

const Performances = () => {

    const [err, setErr] = useState(false);
    const {plays, setPlays} = useContext(AppContext);
    // TODO - must be put in .env
    const baseUrl = 'http://127.0.0.1:8000'
    const endpoint = '/api/plays'

    useEffect(() => {
        axios.get(baseUrl + endpoint)
            .then(response =>
                setPlays(assembleUrls(response.data)))
            .catch(error => setErr(true));
    }, [setPlays, endpoint]);


     if (err) {
        console.log(err)
        //TODO component needed
        return <div className={'inner_main_container'}>KUR</div>;
    }

    if (plays === null) {
        return (
            //TODO component needed
            <div className={'inner_main_container'}>
                <p>Loading...</p>
            </div>
        );
    }

    function assembleUrls(plays) {
        let articles = plays;
        articles = articles.map((play) => {
            if (play.poster_url !== "no_image") {
                return {
                    ...play,
                    poster_url: baseUrl + play.poster_url
                };
            }
            return play; // If poster_url is "no_mage", don't change it
        });
        console.log(articles)
        return articles;
    }

    return (
        <div className={'base_container'}>
            <Container>
                <Row>
                    {plays.map((play) => (
                        <Col key={play.id} xs={12} sm={6} md={3} style={{minWidth: "14rem", marginBottom: '2rem'}}>
                            <PlayArticle {...play} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Performances;