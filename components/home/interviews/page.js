
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'next/image';
import Television from "../work/television";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Interview() {



    const interviews = ['oY6EOAhPfeU', 'P2nFJ7mfyKA', 'CQv_eop1af4', '-8SmRmEmvk0', 'qJKgCh_vzWg']
    const title=["Navdurga । अभिनेत्री मनिषा केळकर यांच्याशी खास बातचीत" ,"Independence Day: महाराष्ट्राची लेक Manisha Kelkar पोहोचली कार रेसिंगमध्ये, पाहा थक्क करणारा प्रवास","Unrealistic Optimistic: What to do when Dreams shatter | Manisha Ram Kelkar | TEDxKalbadevi","Face To Face | Manisha Kelkar | HD | मनिषा केळकर | फेस टू फेस | 08.03.2022 | Ep 04","Manisha Kelkar's Formula 4 Triumph | #thehabitcoach | #formula4 | #motorsports | #racecardrivers"]
    const channel=["Jai Maharashtra News","Times Now Marathi","TEDx Talks","Doordarshan Sahyadri","The Habit Coach - Awesome180"]
    const views=["164" , "435","1.3k", '461', "494"]
    const year=["2023", "2023","2023","2021","2023"]
    return (
       


        <div className="h-[602px] flex flex-col justify-center items-center">
            <p className="text-center italic font-play-fair sm:text-[106px] text-[80px] font-light leading-9 tracking-tight capitalize text-[#202020] mt-[0px] mb-[69px]">
                Interviews
            </p>
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
                    {
                        interviews.map((link, i) => {
                            return <Television key={i} data={link}  title={title[i]} channel={channel[i]}
                            views={views[i]} year={year[i]}></Television>
                        })
                    }
                </Carousel>
            </div>
        </div>

    )
}