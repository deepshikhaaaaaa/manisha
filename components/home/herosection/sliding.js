// import React from 'react';
// import { Carousel } from 'react-bootstrap';

// const Sliding = () => {
//     return (
//         <div className='overflow-y-hidden sm:h-[720px] h-[400px]'>
//             <Carousel className='overflow-hidden sm:h-[720px] h-[400px]'>
//                 <Carousel.Item interval={5000} fade={true}>
//                 <img
//                         className="d-block w-full bg-cover sm:h-[720px] h-[400px] object-cover "
//                         src="/slider.png"

//                         alt="Chania"

//                     />
//                 </Carousel.Item>
//                 <Carousel.Item interval={5000} fade={true}>
//                     <img
//                         className="d-block w-full  bg-cover sm:h-max h-[400px] object-cover   "
//                         src="/herophoto.png"
//                         alt="Chania"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item interval={5000} fade={true}>
//                     <img
//                         className="d-block w-full bg-cover h-[400px] sm:h-[720px] object-cover "
//                         src="/sliderr.png"
//                         alt="Flower"
//                     />
//                 </Carousel.Item>
//                 <Carousel.Item interval={5000} fade=''>
//                     <img
//                         className="d-block w-full bg-cover h-[400px] sm:h-[720px] object-cover "
//                         src="/sliderrr.png"
//                         alt="Flower"
//                     />
//                 </Carousel.Item>
//             </Carousel>
//         </div>
//     );
// };

// export default Sliding;




import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function sliding() {



    // const interviews = ['oY6EOAhPfeU', 'P2nFJ7mfyKA', 'CQv_eop1af4', '-8SmRmEmvk0', 'qJKgCh_vzWg']

    return (



        <div className="h-[602px] flex flex-col justify-center items-center">
            <p className="text-center italic font-play-fair sm:text-[106px] text-[80px] font-light leading-9 tracking-tight capitalize text-[#202020] mt-[0px] mb-[69px]">
                Interviews
            </p>
            <div className=" md:w-[1250px] sm:w-[700px] w-[350px] sm:h-[100%] h-[500px] ml-[20px] mt-[50px]">

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
                    infinite={true}
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
                            items: 1,
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
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={true}
                    rewindWithAnimation={true}
                    rtl={false}
                    customTransition='2500ms'
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <img
                        className="d-block w-full bg-cover h-[400px] sm:h-[720px] object-cover "
                        src="/herophoto.png"
                        alt="Flower"
                    />
                    <img
                        className="d-block w-full  bg-cover sm:h-[720px] h-[400px] object-cover   "
                        src="/slider.png"
                        alt="Chania"
                    />
                     <img
                        className="d-block w-full bg-cover h-[400px] sm:h-[720px] object-cover "
                        src="/sliderr.png"
                        alt="Flower"
                    />
                     <img
                        className="d-block w-full bg-cover h-[400px] sm:h-[720px] object-cover "
                        src="/sliderrr.png"
                        alt="Flower"
                    />
                </Carousel>
            </div>
        </div>

    )
}