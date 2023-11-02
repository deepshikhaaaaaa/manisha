

// import img from "next/img";
import { useEffect, useState } from "react";
import Header from "../header/header";
import BackToTopButton from "../topbutton/page";
import DarkFooter from "../footer/darkfooter";
export default function Gallery() {


    // const imgs = ['', '', '', '', "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    const imgs = ['/gallery/Untitled (1).png', '/gallery/20200202_155726_3a9a17a4-25d5-4129-a08c-df6ec1ee8b61.png', '/gallery/20170419_231411_IMG_5480 1.png', '/gallery/1 (8).png', "/gallery/20200202_155727_0ef71398-02bb-49a4-a964-bd774028c505.png", "/gallery/20200202_155727_9bffcc1e-cdef-4f3b-b7d7-d2ec72be2296.png", "/gallery/20180129_100617_IMG_0292 1.png", "/gallery/20200415_122907 1.png", "/gallery/20200202_145352_3143716a-d19e-4930-88e5-212fa3378388 1.png", "/gallery/IMG-20200907-WA0028 1.png", "/gallery/20180127_142733_fbedaa8b-1e8d-44ed-a5d1-0edaa1242757 1.png", "/gallery/20180110_211638__ANK9452-22 1.png", "/gallery/20130724_102948_IMG_8115 1.png", "/gallery/20190410_172522_IMG_7229 1.png", "/gallery/20190410_174321_IMG_7237.png", "/gallery/20130126_011224_IMG_0015 1.png", "/gallery/20180707_110625_IMG_6108.png", "/gallery/_17I0991.png"]

    const [light, setlight] = useState(false);
    const [index, setindex] = useState();
    var lightroom;

    // const lightroomimg=()=>{
    //     lightroom=(light)?:""
    // }


    // useEffect(()=>{
    // lightroomimg();
    // },[light, index])
    const removing = (e) => {
        if (e.target.id != 'imgclicked' && e.target.id != 'left' && e.target.id != 'right' && e.target.id != 'rightsvg' && e.target.id != 'leftsvg') {
            setlight(false)
            // enable()
        }

    }

    useEffect(() => {
        function preventScroll(event) {
          if (light) {
            event.preventDefault();
          }
        }
    
        document.addEventListener('wheel', preventScroll, { passive: false });
    
        return () => {
          document.removeEventListener('wheel', preventScroll, { passive: false });
        };
      }, [light]);

    return (
        <div className="z-20 ">
            <div className={(light) ? "flex flex-col relative justify-center gap-[20px] items-center" : "flex flex-col gap-[20px] justify-center h-full items-center"} >
                <Header ></Header>

                <div className=" w-full h-screen fixed flex top-[0px] overflow-hiddem bg-[#000000a2] overflow-hi   "
                    style={{ opacity: (light) ? 1 : 0, zIndex: (light) ? 60 : -1 }} onClick={(e) => {
                        removing(e);
                    }}>
                    <button onClick={() => { (index > 0) ? setindex(index - 1) : setindex(0) }} id='left' className="absolute top-[50%] left-[20%] text-white">
                        <svg fill="#FFFF" height="25px" width="25px" version="1.1" id="leftsvg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" space="preserve" stroke="#FFFF" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
                    </button>

                    <div className="w-full  h-full flex justify-center items-center">
                        <img src={imgs[(index != null && index != undefined && light) ? index : null]} width={600} height={100} alt="manisha" className=" bg-cover object-contain" id="imgclicked" />
                    </div>
                    <button onClick={() => { (index < imgs.length - 1) ? setindex(index + 1) : setindex(imgs.length - 1) }} id='right' className="absolute top-[50%] h-[20px] w-[20px] right-[20%] text-white">
                        <svg fill="#FFF" height="25px" width="25px" version="1.1" id="rightsvg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" space="preserve" stroke="#FFF" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
                    </button>

                </div>


                <div className=" sm:gap-[20px] gap-[8px]  flex flex-col">
                    <div className="flex sm:gap-[20px]  gap-[8px]">
                        <div className="flex flex-col sm:gap-[20px]  gap-[8px]">
                            <img src="/gallery/Untitled (1).png" width={388} height={582} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(0);
                            }}/>
                            <img src='/gallery/20200202_155726_3a9a17a4-25d5-4129-a08c-df6ec1ee8b61.png' width={388} height={478} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(1)
                            }}/>
                            <img src='/gallery/20170419_231411_IMG_5480 1.png' width={388} height={418} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(2)
                            }}/>


                        </div>
                        <div className="flex flex-col sm:gap-[20px]  gap-[8px]">
                            <img src='/gallery/1 (8).png' width={793} height={467} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(3);
                            }}/>
                            <img src='/gallery/20200202_155727_0ef71398-02bb-49a4-a964-bd774028c505.png' width={793} height={500} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(4)
                            }}/>
                            <div className="flex sm:gap-[20px]  gap-[8px] ">
                                <img src='/gallery/20200202_155727_9bffcc1e-cdef-4f3b-b7d7-d2ec72be2296.png' width={388} height={509} alt="manisha" className="sm:w-[388px] sm:h-[509px] w-[150px] h-[150px]" onClick={() => {
                                    setlight(true);
                                    
                                    setindex(5)
                                }}/>
                                <img src='/gallery/20180129_100617_IMG_0292 1.png' width={388} height={509} alt="manisha" className="sm:w-[388px] sm:h-[509px] w-[150px] h-[150px]" onClick={() => {
                                    setlight(true);
                                    
                                    setindex(6)
                                }}/>

                            </div>
                        </div>
                    </div>
                    <div className="sm:flex-row flex-col flex sm:gap-[20px]  gap-[8px]">
                        <img src='/gallery/20200415_122907 1.png' width={796} height={665} alt="manisha" onClick={() => {
                            setlight(true);
                            
                            setindex(7)
                        }}/>
                        <img src="/gallery/20200202_145352_3143716a-d19e-4930-88e5-212fa3378388 1.png" width={385} height={665} alt="manisha" onClick={() => {
                            setlight(true);
                            
                            setindex(8)
                        }}/>


                    </div>
                    <div className="flex sm:gap-[20px]  gap-[8px]">
                        <div className="flex flex-col sm:gap-[20px]  gap-[8px]">
                            <img src="/gallery/IMG-20200907-WA0028 1.png" width={643} height={917} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(9)
                            }}/>
                            <img src="/gallery/20180127_142733_fbedaa8b-1e8d-44ed-a5d1-0edaa1242757 1.png" width={643} height={804} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(10)
                            }}/>

                        </div>
                        <div className="flex flex-col sm:gap-[20px]  gap-[8px]">
                            <img src="/gallery/20180110_211638__ANK9452-22 1.png" width={531} height={782} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(11)
                            }}/>
                            <img src="/gallery/20130724_102948_IMG_8115 1.png" width={531} height={941} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(12)
                            }}/>

                        </div>
                    </div>
                    <div className="flex flex-col sm:gap-[20px]  gap-[8px]">
                        <div className="flex sm:flex-row flex-col sm:gap-[20px]  gap-[8px] ">
                            <img src="/gallery/20190410_172522_IMG_7229 1.png" width={747} height={677} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(13)
                            }} className=" "/>


                            <img src="/gallery/20190410_174321_IMG_7237.png" width={425} height={677} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(14)
                            }}/>

                        </div>
                        <div className=" flex sm:flex-row flex-col gap-[20px]">

                            <img src="/gallery/20130126_011224_IMG_0015 1.png" width={408} height={544} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(15)
                            }}/>


                            <img src="/gallery/20180707_110625_IMG_6108.png" width={775} height={544} alt="manisha" onClick={() => {
                                setlight(true);
                                
                                setindex(16)
                            }}/>
                        </div>

                    </div>
                    <img src="/gallery/_17I0991.png" width={1201} height={613} alt="manisha" onClick={() => {
                        setlight(true);
                        
                        setindex(17)
                    }}/>
                </div>

                <BackToTopButton></BackToTopButton>
            </div>
        </div>
    )
}

// export default function Gallery() {
//     return (
//         <div>
//             <div class="row">
//                 <div class="column">
//                     <img src="./gallery/Untitled (1).png" />
//                     <img src="./gallery/1 (8).png" />
//                     <img src="./gallery/20200202_155726_3a9a17a4-25d5-4129-a08c-df6ec1ee8b61.png" />
//                     <img src="./gallery/20200202_155727_0ef71398-02bb-49a4-a964-bd774028c505.png" />
//                     <img src="./gallery/20170419_231411_IMG_5480 1.png" />
//                     <img src="./gallery/20200202_155727_9bffcc1e-cdef-4f3b-b7d7-d2ec72be2296.png" />
//                     <img src="./gallery/20180129_100617_IMG_0292 1.png" />
//                 </div>
//                 <div class="column">
//                     <img src="./gallery/20200415_122907 1.png" />
//                     <img src="./gallery/20200202_145352_3143716a-d19e-4930-88e5-212fa3378388 1.png" />
//                     <img src="./gallery/IMG-20200907-WA0028 1.png" />
//                     <img src="./gallery/20180110_211638__ANK9452-22 1.png" />
//                     <img src="./gallery/20180127_142733_fbedaa8b-1e8d-44ed-a5d1-0edaa1242757 1.png" />
//                     <img src="./gallery/20130724_102948_IMG_8115 1.png" />
//                 </div>
//                 <div class="column">
//                     <img src="./gallery/20190410_172522_IMG_7229 1.png" />
//                     <img src="./gallery/20190410_174321_IMG_7237.png" />
//                     <img src="./gallery/20130126_011224_IMG_0015 1.png" />
//                     <img src="./gallery/20180707_110625_IMG_6108.png" />
//                     <img src="./gallery/_17I0991.png" />

//                 </div>

//             </div>
//         </div>
//     )
// }