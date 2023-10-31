

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../header/header";
import BackToTopButton from "../topbutton/page";
import DarkFooter from "../footer/darkfooter";
export default function Gallery() {


    const imgs = ['/gallery/Untitled (1).png', '/gallery/20200202_155726_3a9a17a4-25d5-4129-a08c-df6ec1ee8b61.png', '/gallery/20170419_231411_IMG_5480 1.png', '/gallery/1 (8).png', "/gallery/20200202_155727_0ef71398-02bb-49a4-a964-bd774028c505.png", "/gallery/20200202_155727_9bffcc1e-cdef-4f3b-b7d7-d2ec72be2296.png", "/gallery/20180129_100617_IMG_0292 1.png", "/gallery/20200415_122907 1.png", "/gallery/20200202_145352_3143716a-d19e-4930-88e5-212fa3378388 1.png", "/gallery/IMG-20200907-WA0028 1.png", "/gallery/20180127_142733_fbedaa8b-1e8d-44ed-a5d1-0edaa1242757 1.png", "/gallery/20180110_211638__ANK9452-22 1.png", "/gallery/20130724_102948_IMG_8115 1.png", "/gallery/20190410_172522_IMG_7229 1.png", "/gallery/20190410_174321_IMG_7237.png", "/gallery/20130126_011224_IMG_0015 1.png", "/gallery/20180707_110625_IMG_6108.png", "/gallery/_17I0991.png"]
    console.log(imgs.length)

    const [light, setlight] = useState(false);
    const [index, setindex] = useState();
    var lightroom;

    // const lightroomimage=()=>{
    //     lightroom=(light)?:""
    // }


    // useEffect(()=>{
    // lightroomimage();
    // },[light, index])
 const removing=(e)=>{
    console.log(e)
    if(e.target.id!='imageclicked')
    {
        setlight(false);
    }

 }

    return (
        <div className="z-20">
            <div className={(light) ? "flex flex-col relative justify-center gap-[20px] items-center" : "flex flex-col gap-[20px] justify-center h-full items-center"} >
                <Header ></Header>

                <div className=" w-full h-screen fixed flex top-[0px] overflow-hiddem bg-[#000000a2] overflow-hi   "
                    style={{ opacity: (light) ? 1 : 0, zIndex: (light) ? 60 : -1 }} onClick={(e)=>{
                        removing(e);

                    }}>
                    <div className="w-full  h-full flex justify-center items-center">
                        <Image src={imgs[(index != null && index != undefined && light) ? index : null]} width={600} height={100} alt="manisha" className=" bg-cover object-contain" id="imageclicked"></Image>
                    </div>
                </div>



                <div className=" gap-[20px]  flex flex-col">
                    <div className="flex gap-[20px]">
                        <div className="flex flex-col gap-[20px]">
                            <Image src={imgs[0]} width={388} height={582} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(0);
                                // console.log("clicked")
                            }}></Image>
                            <Image src={imgs[1]} width={388} height={478} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(1)
                            }}></Image>
                            <Image src={imgs[2]} width={388} height={418} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(2)
                            }}></Image>


                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <Image src={imgs[3]} width={793} height={467} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(3)
                            }}></Image>
                            <Image src={imgs[4]} width={793} height={500} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(4)
                            }}></Image>
                            <div className="flex gap-[20px]">
                                <Image src={imgs[5]} width={388} height={509} alt="manisha" onClick={() => {
                                    setlight(true);
                                    setindex(5)
                                }}></Image>
                                <Image src={imgs[6]} width={388} height={509} alt="manisha" onClick={() => {
                                    setlight(true);
                                    setindex(6)
                                }}></Image>

                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[20px]">
                        <Image src={imgs[7]} width={796} height={665} alt="manisha" onClick={() => {
                            setlight(true);
                            setindex(7)
                        }}></Image>
                        <Image src={imgs[8]} width={385} height={665} alt="manisha" onClick={() => {
                            setlight(true);
                            setindex(8)
                        }}></Image>


                    </div>
                    <div className="flex gap-[20px]">
                        <div className="flex flex-col gap-[20px]">
                            <Image src={imgs[9]} width={643} height={917} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(9)
                            }}></Image>
                            <Image src={imgs[10]} width={643} height={804} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(10)
                            }}></Image>

                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <Image src={imgs[11]} width={531} height={782} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(11)
                            }}></Image>
                            <Image src={imgs[12]} width={531} height={941} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(12)
                            }}></Image>

                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex gap-[20px] ">
                            <Image src={imgs[13]} width={747} height={677} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(13)
                            }} className=" "></Image>


                            <Image src={imgs[14]} width={425} height={677} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(14)
                            }}></Image>

                        </div>
                        <div className=" flex gap-[20px]">

                            <Image src={imgs[15]} width={408} height={544} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(15)
                            }}></Image>


                            <Image src={imgs[16]} width={775} height={544} alt="manisha" onClick={() => {
                                setlight(true);
                                setindex(16)
                            }}></Image>
                        </div>

                    </div>
                    <Image src={imgs[17]} width={1201} height={613} alt="manisha" onClick={() => {
                        setlight(true);
                        setindex(17)
                    }}></Image>
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