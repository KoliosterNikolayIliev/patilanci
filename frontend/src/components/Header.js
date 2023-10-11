import siteLogo from '../public/Logo500x500.svg';
import liveIcon from '../public/live_transperant.gif';
import React, { useContext, useRef, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import WebSocketService from './WebSocketService';

function Header() {
  const { language, changeLanguage } = React.useContext(AppContext);
  const { youtubeLink, setYoutubeLink } = useContext(AppContext);
  const secretKey = '111';
  const containerRef = useRef(null);

  // Initialize the WebSocket service
  const ws = WebSocketService({ secretKey });
  console.log(ws);


  //    ws.onmessage = (event) => {
//    const link = JSON.parse(event.data).youtube_link
//        if (link === "unavailable"){
//            setYoutubeLink(null)
//        }else{
//            setYoutubeLink(link)
//        }
//    }
useEffect(() => {
    // Access and manipulate the container element in the useEffect hook
    if (containerRef.current) {
      // The container element is accessible as containerRef.current
        console.log(containerRef.current.offsetWidth)
      if (containerRef.current.offsetWidth < 1000){
        containerRef.current.style.width = "100%"
      }else{
      containerRef.current.style.width = "80%"}
    }
  });


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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"center"}}>
            <Nav className="ml-auto mr-auto" style={{justifyContent:"space-between"}} ref={containerRef}>
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
              <div style={{ position: "relative" }}>
                <Nav.Link as={Link} to={'/live'}>
                  <img
                    style={{ position: "absolute" , right:"44%"}}
                    src={liveIcon}
                    alt="live"
                    width="20rem"
                    height="20rem"
                  />
                  {language === 'en' ? 'Live' : 'На живо'}
                </Nav.Link>
              </div>
              )}
              <Nav.Link onClick={changeLanguage}>
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
