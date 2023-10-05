import React, {useContext, useEffect} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {AppContext} from "../context/AppContext";
import {Link} from "react-router-dom";


function Header() {
    const {language, changeLanguage} = React.useContext(AppContext);

    const {youtubeLink, setYoutubeLink} = useContext(AppContext);


    useEffect(() => {
        console.log('activated')
        let ws = null;
        // Replace 'your_secret_key_here' with your actual secret key
        const secretKey = '111';
        ws = new WebSocket(`ws://localhost:8000/ws/live-stream/?key=${secretKey}`);
        console.log(ws)
        ws.onopen = () => {
            console.log('WebSocket connected.');
        };

        ws.onmessage = (event) => {
            console.log('hereherehere')

            const data = JSON.parse(event.data);
            console.log(data)
            if (data.youtube_link === "unavailable") {
                setYoutubeLink(null);
            } else {
                setYoutubeLink(data.youtube_link);
            }
        };

        ws.onclose = () => {
            console.log('WebSocket closed.');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // return () => {
        //     // Close the WebSocket connection when the component is unmounted
        //     ws.close();
        // };
    }, );

    return (
        <header className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>
                        <img
                            src="https://w7.pngwing.com/pngs/272/4/png-transparent-word-drawing-word-text-logo-signage-thumbnail.png" // Replace with your logo image URL
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />{' '}

                    </Navbar.Brand>
                    <Nav className="ml-auto mr-auto">
                        <Nav.Link as={Link} to={"/"}>
                            {language === 'en' ? 'Home' : 'Начало'}
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/image-gallery"}>
                            {language === 'en' ? 'Images' : 'Галерия'}
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/video-gallery"}>
                            {language === 'en' ? 'Videos' : 'Видео галерия'}
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/performances"}>
                            {language === 'en' ? 'Performances' : 'Представления'}
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {youtubeLink && <Nav.Link as={Link} to={"/live"}>
                            {language === 'en' ? 'Live' : 'На живо'}
                        </Nav.Link>}
                        <Nav.Link onClick={changeLanguage}>
                            {language === 'en' ? 'БГ' : 'EN'}
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
