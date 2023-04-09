import Carousel from 'react-bootstrap/Carousel';

function CarouselBase({images}) {

    return (
        <Carousel
            fade
            interval={3000}
        >
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 carousel-image"
                        src={image.image_field_url}
                        alt={`Slide ${index + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselBase;
