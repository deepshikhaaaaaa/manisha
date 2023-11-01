import { use, useState } from "react";
import Movies from "./movies";
import Television from "./television";
export default function Work() {
    const [height, sethehight] = useState(600);
    const [showing, setshowing] = useState(false)

    const tvdata = ['nWR2JaggA28', 'tFIsCFoDz24', 'mvwbAahaT1Y', 'tnZttCi8Zzk', 'pcPkZE9gM9Q', '5C5qAaSNAms', 'VAl2RnY9_R4', 'AZzfloEctIs', 'Du_znqX05ZE']
    const title=["Season 3| Coming soon | London" ,"Just Binge Review: Check out is 'Stranger Things - Season 3' Binge or Cringe Worthy? | SpotboyE","Just Binge: Netflix’s Sacred Games 2 Review Marathi | SpotboyE","Just Binge : ZEE 5's Hutatma Season 2 Review Marathi | SpotboyE","Just Binge: Netflix’s Money Heist Season 3 Review | SpotboyE","Just Binge Review: Is Netflix’s 'Typewriter’ Binge Worthy or Cringe Worthy? | SpotboyE","Just Binge Review : Is ZEE 5's Rejectx Binge Worthy Or Cringe Worthy? | SpotboyE","Just Binge: Zee5's Gondya Ala Re Marathi Review | SpotboyE","Just Binge Review: Check out is ‘Bombers’ Binge or Cringe Worthy? | SpotboyE"]
    const channel=["BollylandsDotCom","SpotboyE","SpotboyE","SpotboyE","SpotboyE","SpotboyE","SpotboyE","SpotboyE","SpotboyE"]
const views=['3.3k', "275","222","199",'717','19k',"522",'807','1k']
const year=["2022","2019",'2019',"2019",'2019','2019','2019','2019','2019']    


    return (
        <div className=" flex flex-col justify-center items-center bg-[#EBEBEB]">
            <p className="text-[#202020] text-[106px] font-normal font-play-fair italic tracking-[-2.3px] mt-[46px]">
                Work
            </p>
            <Movies></Movies>
            <p className="font-sen text-[24px] font-normal text-[#414141] uppercase mt-[75px] tracking-[-0.35]">television</p>
            <div className={` overflow-hidden  sm:w-fit w-full `}>

                <div className="  grid-cols-4 grid  overflow-hidden sm:w-full w-[0px] h-[0px] sm:h-full   sm:gap-[49px] gap-[px] mt-[40px] justify-center items-center ml-[30px] sm:ml-[0px]">
                    {
                        tvdata.map((videoid, i) => {
                            return (i < 8) ? <Television key={i} data={videoid}  title={title[i]} channel={channel[i]}
                            views={views[i]} year={year[i]}></Television> : ""
                        })
                    }

                    {
                        (showing) ? tvdata.map((videoid, i) => {
                            return (i > 7) ? <Television key={i} data={videoid}  title={title[i]} channel={channel[i]}
                            views={views[i]} year={year[i]}></Television> : ""
                        }) : ""
                    }
                </div>
               

            </div>
            <button className="pb-2 m-[10px]" onClick={() => {
                setshowing(!showing);
                // (showing)?sethehight(900):sethehight(600)

            }}>
                {
                    (showing) ? <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" space="preserve" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_9_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606 C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0 c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80 C261.465,190.251,261.465,199.749,255.606,205.606z"></path> </g></svg> : <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" space="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_9_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606 C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0 c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80 C261.465,190.251,261.465,199.749,255.606,205.606z"></path> </g></svg>
                }
            </button>
        </div>
    )
}