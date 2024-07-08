import React from 'react';
import { Carousel } from 'react-bootstrap';
import './index.css';

const BootstrapCarousel = (props) => {
    return (
        <>
        <div className="imgCarousel">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.img1}
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
                    src={props.img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        </>
    );
}

export default BootstrapCarousel;
