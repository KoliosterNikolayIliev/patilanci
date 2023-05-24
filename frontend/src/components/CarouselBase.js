import Carousel from 'react-bootstrap/Carousel';

function CarouselBase({images}) {
    // ADD PERFORMACE TO SLIDE
    // console.log(images)
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
                    <Carousel.Caption>
                        <h3>{`Slide ${index + 1} label`}</h3>
                        <p>{`Nulla vitae elit libero, a pharetra augue mollis interdum.`}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselBase;
