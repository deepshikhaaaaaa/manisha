
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'next/image';
import Television from "../work/television";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from 'react';
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


    const interviews = ['oY6EOAhPfeU', 'P2nFJ7mfyKA', 'CQv_eop1af4', '-8SmRmEmvk0', 'qJKgCh_vzWg']
    const title = ["Navdurga । अभिनेत्री मनिषा केळकर यांच्याशी खास बातचीत", "Independence Day: महाराष्ट्राची लेक Manisha Kelkar पोहोचली कार रेसिंगमध्ये, पाहा थक्क करणारा प्रवास", "Unrealistic Optimistic: What to do when Dreams shatter | Manisha Ram Kelkar | TEDxKalbadevi", "Face To Face | Manisha Kelkar | HD | मनिषा केळकर | फेस टू फेस | 08.03.2022 | Ep 04", "Manisha Kelkar's Formula 4 Triumph | #thehabitcoach | #formula4 | #motorsports | #racecardrivers"]
    const channel = ["Jai Maharashtra News", "Times Now Marathi", "TEDx Talks", "Doordarshan Sahyadri", "The Habit Coach - Awesome180"]
    const views = ["164", "435", "1.3k", '461', "494"]
    const year = ["2023", "2023", "2023", "2021", "2023"]

    const interviewsmobile = [['oY6EOAhPfeU', 'P2nFJ7mfyKA', 'CQv_eop1af4'], ['-8SmRmEmvk0', 'qJKgCh_vzWg']]
    const titlemobile = [["Navdurga । अभिनेत्री मनिषा केळकर यांच्याशी खास बातचीत", "Independence Day: महाराष्ट्राची लेक Manisha Kelkar पोहोचली कार रेसिंगमध्ये, पाहा थक्क करणारा प्रवास", "Unrealistic Optimistic: What to do when Dreams shatter | Manisha Ram Kelkar | TEDxKalbadevi"], ["Face To Face | Manisha Kelkar | HD | मनिषा केळकर | फेस टू फेस | 08.03.2022 | Ep 04", "Manisha Kelkar's Formula 4 Triumph | #thehabitcoach | #formula4 | #motorsports | #racecardrivers"]]
    const channelmobile = [["Jai Maharashtra News", "Times Now Marathi", "TEDx Talks"], ["Doordarshan Sahyadri", "The Habit Coach - Awesome180"]]
    const viewsmobile = [["164", "435", "1.3k"], ['461', "494"]]
    const yearmobile = [["2023", "2023", "2023"], ["2021", "2023"]]
    return (



        <div className=" flex flex-col justify-center items-center mt-[70px] mb-[70px]">
            <p className="text-center italic font-play-fair sm:text-[106px] text-[80px] font-light leading-9 tracking-tight capitalize text-[#202020] mt-[0px] mb-[69px]">
                Interviews
            </p>
            <div className=" md:w-[1250px] sm:w-[700px] w-[276px] ml-[20px] mt-[50px]">

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
                        {
                            interviews.map((link, i) => {
                                return <Television key={i} data={link} title={title[i]} channel={channel[i]}
                                    views={views[i]} year={year[i]}></Television>
                            })
                        }
                    </Carousel>
                }
                {
                    !shouldRenderDiv && <Carousel
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
                        {
                            interviewsmobile.map((link, i) => {
                                return <div className='' key={i}>
                                    <Television key={i} data={link[0]} title={titlemobile[i][0]} channel={channelmobile[i][0]}
                                        views={viewsmobile[i][0]} year={yearmobile[i][0]}></Television>
                                    <Television key={i} data={link[1]} title={titlemobile[i][1]} channel={channelmobile[i][1]}
                                        views={viewsmobile[i][1]} year={yearmobile[i][1]}></Television>
                                    {(link[2]) && <Television key={i} data={link[2]} title={titlemobile[i][2]} channel={channelmobile[i][2]}
                                        views={viewsmobile[i][2]} year={yearmobile[i][2]}></Television>
                                    }
                                </div>

                            })
                        }
                    </Carousel>
                }
            </div>
        </div>

    )
}