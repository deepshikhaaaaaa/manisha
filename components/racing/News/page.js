
import Image from "next/image"


export default function News() {
    return (
        <div className="bg-[#f5f5f5] ">
            <p className="font-play-fair md:text-[96px] tracking-[-4.8px] sm:text-[70px] font-normal text-[25px] italic text-center sm:mt-[40px] mt-[20px]">
                News             </p>
            <div className="flex sm:gap-[40px] gap-[10px] justify-center items-center mt-[23px]">
                <div>
                    <Image src='/racing/image 1.png' width={564} height={320} alt="news" className="sm:max-lg:mb-[36px] mb-[10px]" ></Image>

                    <Image src='/racing/image 7.png' width={564} height={320} alt="news" className="sm:max-lg:mb-[36px] mb-[10px]" ></Image>

                    <Image src='/racing/image 9.png' width={564} height={320} alt="news" className="sm:max-lg:mb-[36px] mb-[10px]" ></Image>

                    <Image src='/racing/image 2.png' width={564} height={320} alt="news" className="sm:max-lg:mb-[36px] mb-[10px]" ></Image>

                </div>
                <div>
                    <Image src='/racing/image 3.png' width={577} height={531} alt="news" className="sm:mb-[36px] mb-[10px]" ></Image>
                    <div className="flex sm:gap-[30px] gap-[5px]">
                        <Image src='/racing/image 4.png' width={283} height={387} alt="news" className="md:w-[283px] md:h-[387px] sm:h-[300px] sm:w-[200px] h-[115px] w-[80px] sm:mb-[36px] mb-[10px]" ></Image>
                        <Image src='/racing/image 6.png' width={283} height={387} alt="news" className="md:w-[283px] md:h-[387px] sm:h-[300px] sm:w-[200px] h-[115px] w-[80px] sm:mb-[36px] mb-[10px]" ></Image>

                    </div>
                    <Image src='/racing/image 8.png' width={577} height={585} alt="news" className="sm:mb-[36px] mb-[10px]" ></Image>

                </div>
            </div>
        </div>
    )
}