'use client'
import React from "react";
// import Image from "next/image";
// import styles from './movies.module.css';
// import { useEffect, useState, useRef } from "react";
// import { Button } from "@material-tailwind/react";

// var colors = [["/movies/bandook.png", 'Bandook', '2013'], ["/movies/movieb.png", 'Vanshvel', '2013'], ["/movies/bhola.png", 'Bhola Shankar', '2008'], ["/movies/jho.png", "Jhol", '2019'], ["/movies/lottery.jpg", 'Lottery', '2009'], ["/movies/mission.jpg", 'mission possible', '2011'], ["/movies/moviec.jpg", 'hyacha nahi nem kahi', '2007'], ["/movies/movied.jpg", 'chandrakor', '2010'], ["/movies/nirdosh.jpg", 'nirdosh', '2011']];
// const delay = 3400;

export default function Television() {
    return (
        <div>

            <card className="sm:w-[276px] sm:h-[225px] w-[250px] h-[200px] flex flex-col">
                <a className="relative bg-cover w-[276px]  h-[153px] bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmMTk4MGYtMGMzYy00YTg1LWEwNWMtNmY1Y2Q2NmM4OWY2XkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg')]">



                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                </a>

                <div className="flex flex-row mt-2 gap-2">

                    <a href="#">
                        <img src="https://picsum.photos/seed/1/40/40" className="rounded-full max-h-10 max-w-10" />
                    </a>

                    <div clas="flex flex-col mt-[13px]">
                        <a href="#">
                            <p className="text-black text-sm font-normal font-roboto sm:text-[14px] text-[10px]">Zack Hemsey -&quot;Vengeance&quot;</p>
                        </a>
                        <div classNameName="mt-[5px]">
                            <a className="text-[#606060] font-roboto sm:text-[14px] text-[10px] mt-[14px] hover:text-gray-900" href="#"> Web Dev Simplified </a>
                            <p className="text-[#606060] font-roboto sm:text-[14px] text-[10px]">241K views . 3 years ago</p>
                        </div>
                    </div>

                </div>
            </card>

        </div>
    )
}