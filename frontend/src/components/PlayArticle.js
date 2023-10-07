import React from 'react';
import { Card } from 'react-bootstrap';

const PlayArticle = ({ title, text, dateTime, imageUrl }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{dateTime}</small>
      </Card.Footer>
    </Card>
  );
};

export default PlayArticle;