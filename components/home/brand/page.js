import Image from "next/image"
export default function Brand() {
    return (
        <div className="h-[963px] flex flex-col justify-center items-center bg-[#EBEBEB]">
            <p className="text-center italic mt-[50px] font-play-fair text-[106px] font-light leading-9 tracking-tight capitalize text-[#202020]  mb-[84px]">
                Brand Associations
            </p>
            <div className="grid grid-cols-3 gap-[160px]">
                <div className="w-[270px] h-[284px] bg-white flex justify-center items-center">
                    <Image src='/brands/8.png' height={164} width={164} alt="brand" ></Image>
                </div>
                <div className="w-[270px] h-[284px] bg-white flex justify-center items-center">
                    <Image src='/brands/97.png' height={164} width={164} alt="brand" ></Image>
                </div>
                <div className="w-[270px] h-[284px] bg-white flex justify-center items-center">
                    <Image src='/brands/87.png' height={164} width={164} alt="brand" ></Image>
                </div>

            </div>
            <div className="grid grid-cols-2 gap-[160px] mt-[84px]">
                <div className="w-[270px] h-[284px] bg-white flex justify-center items-center">
                    <Image src='/brands/89.png' height={164} width={164} alt="brand" ></Image>
                </div>
                <div className="w-[270px] h-[284px] bg-white flex justify-center items-center">
                    <Image src='/brands/110.png' height={164} width={164} alt="brand" ></Image>
                </div>


            </div>
        </div>
    )
}