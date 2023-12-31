
import Image from "next/image"
// import Sliding from "./sliding.js"
// import IndexPage from "./page"
import Sliding from "./sliding"
export default function Hero() {
    return (

        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="font-play-fair md:text-[96px] sm:text-[70px]  text-[25px] italic text-center">
                    Manisha Ram Kelkar
                </p>
                <p  className="font-play-fair md:text-[120px] sm:text-[90px] text-center text-[60px] uppercase italic">
                    actress & Racer
                </p>
            </div>
            
           <div className="sm:h-[750px] h-[450px] overflow-hidden">
           <Sliding></Sliding>
           </div>
        </div>
    )
}