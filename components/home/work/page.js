import Movies from "./movies";
import Television from "./television";
export default function Work() {
    return (
        <div className=" flex flex-col justify-center items-center bg-[#EBEBEB]">
            <p className="text-[#202020] text-[106px] font-normal font-play-fair italic tracking-[-2.3px] mt-[46px]">
                Work
            </p>
            <Movies></Movies>
            <p className="font-sen text-[24px] font-normal text-[#414141] uppercase mt-[75px] tracking-[-0.35]">television</p>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-8 sm:w-fit w-full overflow-x-scroll sm:overflow-x-hidden h-[300px] sm:h-[600px]  sm:gap-[49px] gap-[289px] mt-[40px]">
                
                {
                    [...Array(8)].map((e, i) => {
                        return <Television key={i}></Television>
                    })
                }
            </div>
        </div>
    )
}