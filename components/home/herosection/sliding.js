




import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import herophoto from '@/public/herophoto.png';
import  herophotoa from '@/public/slider.png'
import  herophotob from '@/public/sliderr.png'
import  herophotoc from '@/public/sliderrr.png'

export default function sliding() {



    // const interviews = ['oY6EOAhPfeU', 'P2nFJ7mfyKA', 'CQv_eop1af4', '-8SmRmEmvk0', 'qJKgCh_vzWg']

    return (



        <div className="h-[602px] flex flex-col justify-center items-center">
            
            <div className=" md:w-[1250px] sm:w-[700px] w-[350px] sm:h-[100%] h-[600px]  mt-[50px]">

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
                    <Image
                        className="d-block w-full bg-cover object-cover "
                        src={herophoto}
                        fill={true}
                        alt="Flower"
                   
                    ></Image>
                    <Image
                        className="d-block w-full  bg-cover  object-cover   "
                        src={herophotoa}
                        alt="Chania"
                        fill={true}
                    ></Image>
                     <Image
                        className="d-block w-full bg-cover object-cover "
                        src={herophotob}
                        alt="Flower"
                        fill={true}
                    ></Image>
                     <Image
                        className="d-block w-full bg-cover  object-cover "
                        src={herophotoc}
                        alt="Flower"
                    height={600} width={720}
                    ></Image>
                </Carousel>
            </div>
        </div>

    )
}