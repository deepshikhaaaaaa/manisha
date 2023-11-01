// 'use client'
// import React from "react";
// import Image from "next/image";
// import styles from './movies.module.css';
// import { useEffect, useState, useRef } from "react";
// import { Button } from "@material-tailwind/react";

// var colors = [["/movies/bandook.png", 'Bandook', '2013'], ["/movies/movieb.png", 'Vanshvel', '2013'], ["/movies/bhola.png", 'Bhola Shankar', '2008'], ["/movies/jho.png", "Jhol", '2019'], ["/movies/lottery.jpg", 'Lottery', '2009'], ["/movies/mission.jpg", 'mission possible', '2011'], ["/movies/moviec.jpg", 'hyacha nahi nem kahi', '2007'], ["/movies/movied.jpg", 'chandrakor', '2010'], ["/movies/nirdosh.jpg", 'nirdosh', '2011']];
// const delay = 4000;

// export default function Movies() {
//     const [index, setIndex] = useState(0);
//     const timeoutRef = useRef(null);
//     const [back, setBack] = useState(false)

//     function resetTimeout() {
//         if (timeoutRef.current) {
//             clearTimeout(timeoutRef.current);
//         }
//     }

//     useEffect(() => {
//         resetTimeout();
//         index === colors.length - 1 ? setBack(!back) : ""
//         index === 1 && back === true ? setBack(false) : ""
//         timeoutRef.current = setTimeout(
//             () =>

//                 setIndex((prevIndex) =>
//                     ((prevIndex === colors.length - 1) || back) ? prevIndex - 1 : prevIndex + 1
//                 ),

//             delay
//         );

//         return () => {
//             resetTimeout();
//         };
//     }, [index]);

//     return (
//         <div className="flex justify-center items-center w-full sm:px-[100px] px-[10px]">
//             <button className="h-max mr-[25px] hover:border rounded hover:border-solid  hover:border-gray-600 p-2 relative" onClick={() => (index > 0) ? setIndex(index - 1) : setIndex(colors.length - 1)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="49" viewBox="0 0 25 49" fill="none">
//                     <g clip-path="url(#clip0_38_234)">
//                         <path d="M24.1636 48.5619L0.00317383 24.4L24.1636 0.238037L24.9967 1.07121L1.55039 24.4L24.9967 47.7288L24.1636 48.5619Z" fill="black" stroke="black" stroke-width="1.19017" />
//                     </g>
//                     <defs>
//                         <clipPath id="clip0_38_234">
//                             <rect width="25" height="48.8" fill="white" />
//                         </clipPath>
//                     </defs>
//                 </svg>
//             </button>
//             <div className="w-full overflow-hidden">
//                 <div className={`${styles.slideshow} ml-[50px] mr-[50px] `}>
//                     <p className="uppercase font-sen text-[24px] font-normal text-center mb-[47px]">movies</p>

//                     <div
//                         className={styles.slideshowSlider}
//                         style={{ transform: `translate3d(${-index * 127}%, 0, 0)` }}
//                     >

//                         {colors.map((background, index) => (
//                             <div
//                                 className={`${styles.slide}  mr-[23px] ml-[23px] bg-cover `}
//                                 key={index}
//                                 onClick={() => setIndex(index)}

//                             >
//                                 <Image src={background[0]} height={329} width={247} alt="movies" className=" bg-cover h-full  max-h-full w-fit"></Image>
//                                 <div className="font-sen uppercase text-[#7A7A7A] text-center font-normal">
//                                     <p>
//                                         {background[1]}
//                                     </p>
//                                     <p>{background[2]}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>



//                 </div>
//             </div>
//             <button className="ml-[25px] hover:border rounded hover:border-solid hover:border-gray-600 p-2 relative" onClick={() => (index < colors.length) ? setIndex(index + 1) : setIndex(0)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="49" viewBox="0 0 25 49" fill="none">
//                     <g clip-path="url(#clip0_38_236)">
//                         <path d="M0.836349 48.5619L24.9968 24.4L0.836349 0.238037L0.00323105 1.07121L23.4495 24.4L0.00323105 47.7288L0.836349 48.5619Z" fill="black" stroke="black" stroke-width="1.19017" />
//                     </g>
//                     <defs>
//                         <clipPath id="clip0_38_236">
//                             <rect width="25" height="48.8" fill="white" transform="matrix(-1 0 0 1 25 0)" />
//                         </clipPath>
//                     </defs>
//                 </svg>
//             </button>
//         </div>
//     );
// }












// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'next/image';
import Television from "../work/television";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Interview() {



   var colors = [["/movies/bandook.png", 'Bandook', '2013'], ["/movies/movieb.png", 'Vanshvel', '2013'], ["/movies/bhola.png", 'Bhola Shankar', '2008'], ["/movies/jho.png", "Jhol", '2019'], ["/movies/lottery.jpg", 'Lottery', '2009'], ["/movies/mission.jpg", 'mission possible', '2011'], ["/movies/moviec.jpg", 'hyacha nahi nem kahi', '2007'], ["/movies/movied.jpg", 'chandrakor', '2010'], ["/movies/nirdosh.jpg", 'nirdosh', '2011']];

    return (
       


        <div className="h-[642px] flex flex-col justify-center items-center">
             <p className="uppercase font-sen text-[24px] font-normal text-center mb-[47px]">movies</p>
            <div className=" md:w-[1250px] sm:w-[700px] w-[250px] ml-[20px] mt-[50px]">

                <Carousel
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
            </div>
        </div>

    )
}