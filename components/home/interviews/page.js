

import Television from "../work/television"
export default function Interview() {



    const interviews=['oY6EOAhPfeU','P2nFJ7mfyKA','CQv_eop1af4','-8SmRmEmvk0','qJKgCh_vzWg']
    return (
        <div className="h-[642px] flex flex-col justify-center ">
            <p className="text-center italic font-play-fair text-[106px] font-light leading-9 tracking-tight capitalize text-[#202020] mt-[0px] mb-[69px]">
                Interviews
            </p>
            <div className="  overflow-hidden px-[90px] flex justify-center items-center gap-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="49" viewBox="0 0 25 49" fill="none">
                    <g clip-path="url(#clip0_38_243)">
                        <path d="M24.1636 48.5619L0.00317383 24.4L24.1636 0.238037L24.9967 1.07121L1.55039 24.4L24.9967 47.7288L24.1636 48.5619Z" fill="black" stroke="black" stroke-width="1.19017" />
                    </g>
                    <defs>
                        <clipPath id="clip0_38_243">
                            <rect width="25" height="48.8" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="grid hidescroll grid-cols-8  w-full overflow-x-scroll  gap-[325px] mt-[40px]">

                    {
                        interviews.map((link, i) => {
                            return <Television key={i} data={link}></Television>
                        })
                    }
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="49" viewBox="0 0 25 49" fill="none">
                    <g clip-path="url(#clip0_38_245)">
                        <path d="M0.836349 48.5619L24.9968 24.4L0.836349 0.238037L0.00323105 1.07121L23.4495 24.4L0.00323105 47.7288L0.836349 48.5619Z" fill="black" stroke="black" stroke-width="1.19017" />
                    </g>
                    <defs>
                        <clipPath id="clip0_38_245">
                            <rect width="25" height="48.8" fill="white" transform="matrix(-1 0 0 1 25 0)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}