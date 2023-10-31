import { use, useState } from "react";
import Movies from "./movies";
import Television from "./television";
export default function Work() {
const [height,sethehight]=useState(600);
const [showing, setshowing]=useState(true)

const tvdata=['nWR2JaggA28', 'tFIsCFoDz24','mvwbAahaT1Y','tnZttCi8Zzk','pcPkZE9gM9Q','5C5qAaSNAms','VAl2RnY9_R4','AZzfloEctIs','Du_znqX05ZE']


    return (
        <div className=" flex flex-col justify-center items-center bg-[#EBEBEB]">
            <p className="text-[#202020] text-[106px] font-normal font-play-fair italic tracking-[-2.3px] mt-[46px]">
                Work
            </p>
            <Movies></Movies>
            <p className="font-sen text-[24px] font-normal text-[#414141] uppercase mt-[75px] tracking-[-0.35]">television</p>
            <div className={`grid md:grid-cols-4 overflow-hidden sm:grid-cols-2 grid-cols-8 sm:w-fit w-full sm:overflow-x-hidden h-[600px] sm:h-[${height}px]  sm:gap-[49px] gap-[289px] mt-[40px]`}>
                
                {
                    tvdata.map((videoid, i) => {
                        return <Television key={i} data={videoid}></Television>
                    })
                }
                
            </div>
            <button className="pb-2" onClick={()=>{
                setshowing(!showing);
                (showing)?sethehight(900):sethehight(600)

            }}>
more
                </button>
        </div>
    )
}