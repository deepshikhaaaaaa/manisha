import Image from "next/image"
export default function Brand() {
    return (
        <div className="md:h-[1103px] sm:h-[1000px]  flex flex-col justify-center items-center bg-[#EBEBEB]">
            <p className="text-center w-min italic  font-play-fair sm:text-[106px] text-[70px] font-light sm:leading-[100px] leading-[60px] tracking-tight capitalize text-[#202020]  sm:mb-[84px] mb-[30px]">
                Brand Associations
            </p>
            <div className="grid grid-cols-3 md:gap-[160px] sm:gap-[80px] gap-[10px]">
                <div className="sm:w-[270px] w-[90px] sm:h-[284px] h-[100px] bg-white flex justify-center items-center">
                    <Image src='/brands/8.png' height={164} width={164} alt="brand" ></Image>
                </div>
                <div className="sm:w-[270px] w-[90px] sm:h-[284px] h-[100px] bg-white flex justify-center items-center">
                    <Image src='/brands/97.png' height={164} width={164} alt="brand" ></Image>
                </div>
                <div className="sm:w-[270px] w-[90px] sm:h-[284px] h-[100px] bg-white flex justify-center items-center">
                    <Image src='/brands/87.png' height={164} width={164} alt="brand" ></Image>
                </div>

            </div>
            <div className="grid grid-cols-2 md:gap-[160px] sm:gap-[80px] gap-[10px] sm:mt-[84px] mt-[10px] mb-[50px]">
                <div className="sm:w-[270px] w-[90px] sm:h-[284px] h-[100px] bg-white flex justify-center items-center">
                    <Image src='/brands/89.png' height={164} width={164} alt="brand" ></Image>
                </div>
                <div className="sm:w-[270px] w-[90px] sm:h-[284px] h-[100px] bg-white flex justify-center items-center">
                    <Image src='/brands/110.png' height={164} width={164} alt="brand" ></Image>
                </div>


            </div>
        </div>
    )
}