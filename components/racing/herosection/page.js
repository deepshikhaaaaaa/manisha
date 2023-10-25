
import Image from "next/image"

export default function Heroracing() {
    return (

        <div className="flex flex-col text-[#FFF] md:px-[100px] sm:px-[50px] px-[10px] justify-center items-center">
            <div>
                <p className="font-play-fair md:text-[96px] sm:tracking-[-4.8px] tracking-tighter sm:text-[70px] font-normal text-[25px] italic text-center">
                    Manisha Ram Kelkar
                </p>
                <p className="font-play-fair md:text-[36px] tracking-[-2.0px] sm:text-[90px] text-center text-[35px] capitalize italic">
                    who switches life between camera & race tracks
                </p>
            </div>
            <div className="w-full flex flex-col justify-center items-center">

                <div className="w-full sm:h-[614px] h-[300px]" style={{ backgroundImage: `url(/racing/manisha.png)`, backgroundSize: "cover" }}>

                </div>
                <div className="sm:p-[46px]  p-[20px] bg-[rgba(255,0,0,0.81)] mt-[-75px] md:w-[831px] sm:w-[600px] w-[300px]">
                    <p className="md:text-[16px] sm:text-[10px] text-[8px] font-medium font-poppins">
                        Manisha Ram Kelkar has taken her passion for speed to new heights as she transitions into a National-level LGB Formula 4 race driver. A former karting enthusiast, she recently showcased her racing prowess at the 22nd JK Tyre FMSCI National Racing Championship. Steering her way to success, Manisha is now proudly associated with Avalanche Racing.
                    </p>
                </div>
            </div>
            <div className="w-full flex sm:mt-[81px] mt-[0px] sm:h-[742px] h-[400px] items-center ">

                <div className="md:w-[742px]  md:h-[658px] sm:w-[350px] sm:h-[250px] w-[200px] h-[180px]" style={{ backgroundImage: `url(/racing/manisha_car.png)`, backgroundSize: "cover" }}>

                </div>
                <div className="py-[46px] mt-[] sm:px-[62px] px-[20px] bg-[rgba(255,0,0,0.81)] md:w-[492px] sm:w-[300px] w-[250px] flex flex-col justify-center items-center">
                    <p className="sm:text-[16px] text-[8px] font-medium font-poppins">
                    Balancing the thrill of the race track with her on-screen endeavors, this versatile actress is breaking barriers and leaving tire marks both in the world of cinema and racing. Manisha&apos;s journey from the silver screen to the fast-paced world of motorsports is a testament to her determination and the pursuit of diverse passions. Stay tuned as she continues to rev up engines and captivate audiences, embodying the spirit of a true multifaceted talent.
                    </p>
                </div>
            </div>
        </div>
    )
}