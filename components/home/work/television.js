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
              console.log(data.items[0])
            setVideoData(data.items[0]);
            const dateStr = videoData.snippet.publishedAt;
            const date = new Date(dateStr);
            setyear(date.getFullYear());
            console.log(year)
          }
        })
        .catch((error) => {
          console.error('Error fetching video data', error);
        });
    }, [props.data]);


    return (
        <div>

            <card className="sm:w-[276px] sm:h-[255px] w-[250px] overflow-hidden h-[200px] overflow-x-hidden flex flex-col">
                <div className="relative bg-cover w-[276px]  h-[203px] py-2 flex flex-col justify-center items-center bg-black">


                    <iframe src={`https://www.youtube.com/embed/${props.data}`} frameborder="0"></iframe>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                </div>

                <div className="flex flex-row mt-2 gap-2">


                    <div clas="flex flex-col over mt-[13px]">
                        <a href="#">
                            <p className="text-black mt-[5px] text-sm font-normal font-roboto sm:text-[14px] text-[10px] overflow-hidden h-[35px] text-ellipsis leading-[18px]">{(videoData!=null && videoData!=undefined)?videoData.snippet.title:""}</p>
                        </a>
                        <div classNameName="mt-]">
                            <a className="text-[#606060] font-roboto sm:text-[14px] text-[10px] mt-[14px] hover:text-gray-900" href="#"> {(videoData!=null && videoData!=undefined)?videoData.snippet.channelTitle:""} </a>
                           <div className="flex gap-[10px]">
                           <p className="text-[#606060] font-roboto sm:text-[14px] text-[10px]">{(videoData!=null && videoData!=undefined)?videoData.statistics.viewCount:""} views</p>
                            <p className="text-[#606060] font-roboto sm:text-[14px] text-[10px]">{(year!=null && year!=undefined)?year:""}</p>
                           </div>
                        </div>
                    </div>

                </div>
            </card>

        </div>
    )
}