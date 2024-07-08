import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the necessary CSS

const ImageCarousel = () => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
                <img src="https://via.placeholder.com/800x400.png?text=Slide+1" alt="Slide 1" />
                <p className="legend">Slide 1</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x400.png?text=Slide+2" alt="Slide 2" />
                <p className="legend">Slide 2</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x400.png?text=Slide+3" alt="Slide 3" />
                <p className="legend">Slide 3</p>
            </div>
        </Carousel>
    );
}

export default ImageCarousel;
