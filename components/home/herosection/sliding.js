import React from 'react';
import { Carousel } from 'react-bootstrap';

const Sliding = () => {
    return (
        <div className='overflow-y-hidden h-[720px]'>
            <Carousel className='overflow-hidden h-[720px]'>
                <Carousel.Item interval={5000} fade={true}>
                    <img
                        className="d-block w-full bg-cover h-[720px] object-cover "
                        src="/slider.png"
                       
                        alt="Chania"

                    />
                </Carousel.Item>
                <Carousel.Item interval={5000} fade={true}>
                    <img
                        className="d-block w-full   fill-current "
                        src="/herophoto.png"
                        alt="Chania"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000} fade={true}>
                    <img
                        className="d-block w-full bg-cover h-[720px] object-cover "
                        src="/sliderr.png"
                        alt="Flower"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000} fade=''>
                    <img
                        className="d-block w-full bg-cover h-[720px] object-cover "
                        src="/sliderrr.png"
                        alt="Flower"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Sliding;