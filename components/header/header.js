import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header(props) {
    const [active,setactive]=useState()
    console.log(props.link)
    return (
        <div className="h-[96px] w-full flex  justify-between items-center md:px-[128px] sm:px-[60px] bg-white px-[20px]">
<Link href='/'>
<Image src='/logo.png' height={36} width={123} className="sm:h-[36px] h-[20px] sm:w-[123px] w-[70px]" alt="Manisha"></Image>
</Link>
            <div className="font-montserrat font-medium text-[#202020] sm:text-[12px] text-[9px] uppercase flex md:gap-[40px] sm:gap-[20px] gap-[10px]">
                <Link href='/' className=" focus:underline hover:bg-black hover:text-white focus:bg-black focus:text-white px-2 py-1  hover:shadow-md hover:shadow-gray-500 transform hover:scale-110 transition ease-out delay-75">Home</Link>
                <Link href='/gallery' className="focus:underline hover:bg-black hover:text-white focus:bg-black focus:text-white px-2 py-1  hover:shadow-md hover:shadow-gray-500 transform hover:scale-110 transition ease-out delay-75">Gallery</Link>
                <Link href='/racing' className="focus:underline hover:bg-black hover:text-white focus:bg-black focus:text-white px-2 py-1  hover:shadow-md hover:shadow-gray-500 transform hover:scale-110 transition ease-out delay-75">Racing</Link>

            </div>
            <button className="font-montserrat uppercase font-bold text-[12px] sm:px-[23px] sm:py-[10px] hover:bg-transparent  hover:border-gray-400 px-[14px] py-[7px] bg-black text-white border border-transparent border-solid hover:text-black hover:shadow-md hover:shadow-gray-500 transform hover:scale-105 transition ease-out delay-75">Contact</button>
        </div>
    )
}