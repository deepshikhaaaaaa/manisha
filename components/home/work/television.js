'use client'
import React, { useEffect,useState } from "react";


export default function Television(props) {

//  

    const videoLink = `https://www.youtube.com/watch?v=${props.data}`
    return (
        <div className="sm:w-[300px] w-full flex justify-center items-center">

            <div className="sm:w-[300px] sm:h-[255px] w-[300px] m-2 overflow-hidden h-[260px] overflow-x-hidden flex flex-col justify-center items-center ">
                <div className="relative bg-cover sm:w-[300px] w-[300px]  sm:h-[203px]  flex flex-col justify-center items-center bg-transparent">


                    <iframe width={276} loading="lazy" src={`https://www.youtube.com/embed/${props.data}`} className="sm:w-[276px] w-[276px]"></iframe>

                </div>

                <div className="flex flex-row m-2 sm:w-[276px] w-[276px] sm:gap-2 gap-[4px]">


                    <div clas="flex flex-col over mt-[13px]">
                        <a href={videoLink}>
                            <p className="text-black sm:mt-[5px] mt-[1px] text-sm font-normal font-roboto sm:text-[14px] text-[10px] overflow-hidden sm:h-[35px] h-[12px] text-ellipsis leading-[18px]">{props.title}</p>
                        </a>
                        <div className="mt">
                            <a className="text-[#606060] font-roboto sm:text-[14px] text-[10px] sm:mt-[14px] mt-[2px]  hover:text-gray-900" href="#"> {props.channel} </a>
                           <div className="flex sm:gap-[10px] gap-[2px]">
                           <p className="text-[#606060] font-roboto sm:text-[14px] text-[10px]">{props.views} views</p>
                            <p className="text-[#606060] font-roboto sm:text-[14px] text-[10px]">{props.year}</p>
                           </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}