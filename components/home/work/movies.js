



// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'next/image';
import Television from "../work/television";
import Carousel from "react-multi-carousel";
import { useState, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
export default function Interview() {

    const [shouldRenderDiv, setShouldRenderDiv] = useState(false);

    useEffect(() => {
        // Add an event listener to update the state when the window is resized.
        const handleResize = () => {
            setShouldRenderDiv(window.innerWidth >= 650);
        };

        // Initial check
        handleResize();

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var colors = [["/movies/bandook.png", 'Bandook', '2013'], ["/movies/movieb.png", 'Vanshvel', '2013'], ["/movies/bhola.png", 'Bhola Shankar', '2008'], ["/movies/jho.png", "Jhol", '2019'], ["/movies/lottery.jpg", 'Lottery', '2009'], ["/movies/mission.jpg", 'mission possible', '2011'], ["/movies/moviec.jpg", 'hyacha nahi nem kahi', '2007'], ["/movies/movied.jpg", 'chandrakor', '2010'], ["/movies/nirdosh.jpg", 'nirdosh', '2011']];

    var mobilesizecolors = [[["/movies/bandook.png", 'Bandook', '2013'], ["/movies/movieb.png", 'Vanshvel', '2013'], ["/movies/bhola.png", 'Bhola Shankar', '2008']], [["/movies/jho.png", "Jhol", '2019'], ["/movies/lottery.jpg", 'Lottery', '2009'], ["/movies/mission.jpg", 'mission possible', '2011']], [["/movies/moviec.jpg", 'hyacha nahi nem kahi', '2007'], ["/movies/movied.jpg", 'chandrakor', '2010'], ["/movies/nirdosh.jpg", 'nirdosh', '2011']]]

    return (



        <div className=" flex flex-col justify-center items-center">
            <p className="uppercase font-sen text-[24px] font-normal text-center mb-[47px]">movies</p>
            <div className=" md:w-[1250px] sm:w-[700px] w-[400px]  mt-[50px]">

                {
                    shouldRenderDiv && <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        customTransition='2500ms'
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {colors.map((background, index) => (
                            <div
                                key={index}
                                className='h-[400px] w-[247px] flex flex-col justify-center items-center'

                            >
                                <Image src={background[0]} height={329} width={247} alt="movies" className=" bg-cover h-[329px] w-[247px]  max-h-full"></Image>
                                <div className="font-sen mt-[10px] uppercase text-[#7A7A7A] text-center font-normal">
                                    <p>
                                        {background[1]}
                                    </p>
                                    <p>{background[2]}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                }
                {
                    (!shouldRenderDiv) && <Carousel
                        additionalTransfrom={0}
                        arrows
                        // autoPlay={true}
                        // autoPlaySpeed={3000}
                        centerMode={false}
                        className="  absolute"
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        // infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        customTransition='2500ms'
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {mobilesizecolors.map((background, index) => (
                            <div key={index} className='flex flex-col jus' >


                                <div className='h-[400px] w-[400px] flex flex-col justify-center items-center'>
                                    <Image src={background[0][0]} height={329} width={247} alt="movies" className=" bg-cover h-[329px] w-[247px]  max-h-full"></Image>
                                    <div className="font-sen mt-[10px] uppercase text-[#7A7A7A] text-center font-normal">
                                        <p>
                                            {background[0][1]}
                                        </p>
                                        <p>{background[0][2]}</p>
                                    </div>
                                </div>
                                <div className='h-[400px] w-[400px] flex flex-col justify-center items-center'>
                                    <Image src={background[1][0]} height={329} width={247} alt="movies" className=" bg-cover h-[329px] w-[247px]  max-h-full"></Image>
                                    <div className="font-sen mt-[10px] uppercase text-[#7A7A7A] text-center font-normal">
                                        <p>
                                            {background[1][1]}
                                        </p>
                                        <p>{background[1][2]}</p>
                                    </div>
                                </div>
                                <div className='h-[400px] w-[400px] flex flex-col justify-center items-center'>
                                    <Image src={background[2][0]} height={329} width={247} alt="movies" className=" bg-cover h-[329px] w-[247px]  max-h-full"></Image>
                                    <div className="font-sen mt-[10px] uppercase text-[#7A7A7A] text-center font-normal">
                                        <p>
                                            {background[2][1]}
                                        </p>
                                        <p>{background[2][2]}</p>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </Carousel>
                }
            </div>
        </div>

    )
}