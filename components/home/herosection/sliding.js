'use client'
import React from "react";
import styles from './slide.module.css';
import { useEffect, useState, useRef } from "react";

var colors = ["/herophoto.png", "/slider.png", "/sliderr.png", "/sliderrr.png",];
const delay = 3000;

export default function Sliding() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const [back, setBack] = useState(false)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        index === colors.length - 1 ? setBack(!back) : ""
        index === 1 && back === true ? setBack(false) : ""
        timeoutRef.current = setTimeout(
            () =>

                setIndex((prevIndex) =>
                    ((prevIndex === colors.length - 1) || back) ? prevIndex - 1 : prevIndex + 1
                ),

            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="flex justify-center items-center w-full px-[100px]">
            <button className="h-max mr-[25px] hover:border rounded hover:border-solid hover:border-gray-600 p-2 relative" onClick={() => (index> 0) ? setIndex(index - 1) : setIndex(colors.length - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="49" viewBox="0 0 25 49" fill="none">
                    <g clip-path="url(#clip0_38_234)">
                        <path d="M24.1636 48.5619L0.00317383 24.4L24.1636 0.238037L24.9967 1.07121L1.55039 24.4L24.9967 47.7288L24.1636 48.5619Z" fill="black" stroke="black" stroke-width="1.19017" />
                    </g>
                    <defs>
                        <clipPath id="clip0_38_234">
                            <rect width="25" height="48.8" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <div className="w-full overflow-hidden">
                <div className={`${styles.slideshow} ml-[50px] mr-[50px] `}>
                    <p className="uppercase font-sen text-[24px] font-normal text-center mb-[47px]">movies</p>

                    <div
                        className={styles.slideshowSlider}
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {colors.map((background, index) => (
                            <div
                                className={`${styles.slide}  border border-black border-solid`}
                                key={index}
                                style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
                            ></div>
                        ))}
                    </div>


                </div>
            </div>
            <button className="ml-[25px] hover:border rounded hover:border-solid hover:border-gray-600 p-2 relative" onClick={() => (index < colors.length-1) ? setIndex(index + 1) : setIndex(0)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="49" viewBox="0 0 25 49" fill="none">
                    <g clip-path="url(#clip0_38_236)">
                        <path d="M0.836349 48.5619L24.9968 24.4L0.836349 0.238037L0.00323105 1.07121L23.4495 24.4L0.00323105 47.7288L0.836349 48.5619Z" fill="black" stroke="black" stroke-width="1.19017" />
                    </g>
                    <defs>
                        <clipPath id="clip0_38_236">
                            <rect width="25" height="48.8" fill="white" transform="matrix(-1 0 0 1 25 0)" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    );
}