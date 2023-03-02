import Carousel from 'react-bootstrap/Carousel';
import React from "react";

function UncontrolledExample(props) {
    console.log(props)
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.url}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

// {images.map((image) => (
//                 <img key={image.id} src={baseUrl + image.image_field_url} alt={`${image.id}`}/>
//             ))}