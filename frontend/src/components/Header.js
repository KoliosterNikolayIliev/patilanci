import siteLogo from '../public/Logo500x500.svg';
import liveIcon from '../public/live_transperant.gif';
import React, {useContext, useRef, useEffect} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {AppContext} from '../context/AppContext';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import getLiveVideo from "../services/getLiveVideo"

function Header() {
    const {language, changeLanguage} = React.useContext(AppContext);
    const {youtubeLink, setYoutubeLink, setLiveDescription, setLiveDescriptionBg} = useContext(AppContext);
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const live_location = useLocation().pathname === "/live";

    function handleClick() {
        changeLanguage()
        updateSize()
    }

    function updateSize() {
        if (containerRef.current.offsetWidth < 900) {
            containerRef.current.style.width = "100%"
        } else {
            containerRef.current.style.width = "80%"
        }
    }

    useEffect(() => {
        // Access and manipulate the container element in the useEffect hook
        if (containerRef.current) {
            // The container element is accessible as containerRef.current

            updateSize();
        }
    });

    useEffect(() => {
        if (!youtubeLink && live_location) {
            navigate('/');
        }
    });

    useEffect(() => {
        getLiveVideo()
            .then(response => {
                const data = response.data[0]
                // console.log(data)
                setYoutubeLink(data.embedded_video)
                setLiveDescription(data.description)
                setLiveDescriptionBg(data.description_bg)
            })
            .catch(error =>
                console.log(error)
            );
    }, [setYoutubeLink, setLiveDescription, setLiveDescriptionBg]);

    return (
        <header className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>
                        <img
                            src={siteLogo} // Replace with your logo image URL
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "center"}}>
                        <Nav className="ml-auto mr-auto" style={{justifyContent: "space-between", width: "80%"}}
                             ref={containerRef}>
                            <Nav.Link as={Link} to={'/'}>
                                {language === 'en' ? 'Home' : 'Начало'}
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/image-gallery'}>
                                {language === 'en' ? 'Images' : 'Галерия'}
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/video-gallery'}>
                                {language === 'en' ? 'Videos' : 'Видео галерия'}
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/projects'}>
                                {language === 'en' ? 'Projects' : 'Проекти'}
                            </Nav.Link>

                            {youtubeLink && (
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                >
                                    <img
                                        style={{marginBottom: "4px"}}
                                        src={liveIcon}
                                        alt="live"
                                        width="20rem"
                                        height="20rem"
                                    />
                                    <Nav.Link as={Link} to={'/live'}>

                                        {language === 'en' ? 'Live' : 'На живо'}
                                    </Nav.Link>
                                </div>
                            )}
                            <Nav.Link onClick={handleClick}>
                                {language === 'en' ? 'БГ' : 'EN'}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
