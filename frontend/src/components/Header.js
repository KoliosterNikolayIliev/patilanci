import siteLogo from '../public/Logo500x500.svg';
import liveIcon from '../public/live_transperant.gif';
import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import WebSocketService from './WebSocketService';

function Header() {
  const { language, changeLanguage } = React.useContext(AppContext);
  const { youtubeLink, setYoutubeLink } = useContext(AppContext);
  const secretKey = '111';

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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-auto">
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
            </Nav>
            <Nav>
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
