'use client'
import React, { useEffect,useState } from "react";
// import Image from "next/image";
// import styles from './movies.module.css';
// import { useEffect, useState, useRef } from "react";
// import { Button } from "@material-tailwind/react";

// var colors = [["/movies/bandook.png", 'Bandook', '2013'], ["/movies/movieb.png", 'Vanshvel', '2013'], ["/movies/bhola.png", 'Bhola Shankar', '2008'], ["/movies/jho.png", "Jhol", '2019'], ["/movies/lottery.jpg", 'Lottery', '2009'], ["/movies/mission.jpg", 'mission possible', '2011'], ["/movies/moviec.jpg", 'hyacha nahi nem kahi', '2007'], ["/movies/movied.jpg", 'chandrakor', '2010'], ["/movies/nirdosh.jpg", 'nirdosh', '2011']];
// const delay = 3400;

export default function Television(props) {

    const [videoData, setVideoData] = useState(null);
const [year,setyear]=useState()
    useEffect(() => {
      const apiKey = 'AIzaSyCggcoDYz1C3qy3WH4Bv94xGnVkGr5ofy0'; // Replace with your API key
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${props.data}&key=${apiKey}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.items && data.items.length > 0) {
            setVideoData(data.items[0]);
            const dateStr = videoData.snippet.publishedAt;
            const date = new Date(dateStr);
            setyear(date.getFullYear());
          }
        })
        .catch((error) => {
          console.error('Error fetching video data', error);
        });
    }, []);

    const videoLink = `https://www.youtube.com/watch?v=${props.data}`
    return (
        <div className="sm:w-[276px] w-[250px] flex justify-center items-center">

            <card className="sm:w-[276px] sm:h-[255px] w-[250px] overflow-hidden h-[260px] overflow-x-hidden flex flex-col">
                <div className="relative bg-cover sm:w-[276px] w-[200px]  sm:h-[203px]  flex flex-col justify-center items-center bg-black">


                    <iframe src={`https://www.youtube.com/embed/${props.data}`} frameborder="0" className="sm:w-[276px] w-[250px]"></iframe>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                </div>

                <div className="flex flex-row mt-2 sm:gap-2 gap-[4px]">


                    <div clas="flex flex-col over mt-[13px]">
                        <a href={videoLink}>
                            <p className="text-black sm:mt-[5px] mt-[1px] text-sm font-normal font-roboto sm:text-[14px] text-[10px] overflow-hidden h-[35px] text-ellipsis leading-[18px]">{props.title}</p>
                        </a>
                        <div classNameName="mt-]">
                            <a className="text-[#606060] font-roboto sm:text-[14px] text-[10px] sm:mt-[14px] mt-[5px] hover:text-gray-900" href="#"> {props.channel} </a>
                           <div className="flex sm:gap-[10px] gap-[2px]">
                           <p className="text-[#606060] font-roboto sm:text-[14px] text-[10px]">{props.views} views</p>
                            <p className="text-[#606060] font-roboto sm:text-[14px] text-[10px]">{props.year}</p>
                           </div>
                        </div>
                    </div>

                </div>
            </card>

        </div>
    )
}