import React from 'react';
import { Carousel } from 'react-bootstrap';

const Sliding = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000} fade={true}>
                <img
                    className="d-block w-100"
                    src="/herophoto.png"
                    alt="Chania"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}  fade={true}>
                <img
                    className="d-block w-100"
                    src="/slider.png"
                    alt="Chania"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}  fade={true}>
                <img
                    className="d-block w-100"
                    src="/sliderr.png"
                    alt="Flower"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}   fade=''>
                <img
                    className="d-block w-100"
                    src="/sliderrr.png"
                    alt="Flower"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Sliding;