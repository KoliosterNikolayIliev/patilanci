import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';



function ImageCard({ image }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };
  // const style = image?{ width: '18rem', marginTop:'1%'}:{opacity:0}
  const style = { width: '18rem', marginTop:'1%'}
  return (
    <>
      <Card style={style}>
        <div style={{ position: 'relative' }}>
          {isLoading && (
            <div className="custom_spinner_container">
              <div className="custom_spinner"></div>
            </div>
          )}
          <Card.Img
            variant="top"
            src={image}
            className="custom_img_card_img"
            style={{ opacity: isLoading ? 0 : 1 }}
            onLoad={handleImageLoad}
          />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handleModalShow}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleModalClose} size="lg">

        <Modal.Body>
          <img
            src={image}
            alt="Full size"
            className="custom_modal_img"
            style={{ maxWidth: '100%', maxHeight: '100vh' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageCard;