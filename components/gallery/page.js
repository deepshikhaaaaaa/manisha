

import Image from "next/image";
export default function Gallery() {
    return (
        <div className="flex flex-col gap-[20px] justify-center items-center">
            <div className="flex gap-[20px]">
                <div className="flex flex-col gap-[20px]">
                    <Image src="/gallery/Untitled (1).png" width={388} height={582} alt="manisha"></Image>
                    <Image src="/gallery/20200202_155726_3a9a17a4-25d5-4129-a08c-df6ec1ee8b61.png" width={388} height={478} alt="manisha"></Image>
                    <Image src="/gallery/20170419_231411_IMG_5480 1.png" width={388} height={418} alt="manisha"></Image>


                </div>
                <div className="flex flex-col gap-[20px]">
                    <Image src="/gallery/1 (8).png" width={793} height={467} alt="manisha"></Image>
                    <Image src="/gallery/20200202_155727_0ef71398-02bb-49a4-a964-bd774028c505.png" width={793} height={500} alt="manisha"></Image>
                    <div className="flex gap-[20px]">
                        <Image src="/gallery/20200202_155727_9bffcc1e-cdef-4f3b-b7d7-d2ec72be2296.png" width={388} height={509} alt="manisha"></Image>
                        <Image src="/gallery/20180129_100617_IMG_0292 1.png" width={388} height={509} alt="manisha"></Image>

                    </div>
                </div>
            </div>
            <div className="flex gap-[20px]">
                <Image src="/gallery/20200415_122907 1.png" width={796} height={665} alt="manisha"></Image>
                <Image src="/gallery/20200202_145352_3143716a-d19e-4930-88e5-212fa3378388 1.png" width={385} height={665} alt="manisha"></Image>


            </div>
            <div className="flex gap-[20px]">
                <div className="flex flex-col gap-[20px]">
                    <Image src="/gallery/IMG-20200907-WA0028 1.png" width={643} height={917} alt="manisha"></Image>
                    <Image src="/gallery/20180127_142733_fbedaa8b-1e8d-44ed-a5d1-0edaa1242757 1.png" width={643} height={804} alt="manisha"></Image>

                </div>
                <div className="flex flex-col gap-[20px]">
                    <Image src="/gallery/20180110_211638__ANK9452-22 1.png" width={531} height={782} alt="manisha"></Image>
                    <Image src="/gallery/20130724_102948_IMG_8115 1.png" width={531} height={941} alt="manisha"></Image>

                </div>
            </div>
            <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[20px] ">
                    <Image src="/gallery/20190410_172522_IMG_7229 1.png" width={747} height={677} alt="manisha" className=" "></Image>


                    <Image src="/gallery/20190410_174321_IMG_7237.png" width={425} height={677} alt="manisha"></Image>

                </div>
                <div className=" flex gap-[20px]">

                    <Image src="/gallery/20130126_011224_IMG_0015 1.png" width={408} height={544} alt="manisha"></Image>


                    <Image src="/gallery/20180707_110625_IMG_6108.png" width={775} height={544} alt="manisha"></Image>
                </div>

            </div>
            <Image src="/gallery/_17I0991.png" width={1201} height={613} alt="manisha"></Image>

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