'use client'

import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
export default function Footer() {
    const [message ,setmessage]=useState()
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-center italic mt-[50px] font-play-fair sm:text-[106px] text-[50px] font-light leading-9 tracking-tight capitalize text-[#202020]  sm:mb-[84px] mb-[40px]">
                Contact
            </p>
            <div className="flex sm:gap-[24px] gap-[5px] justify-center items-center">
                <input  type="text" className="md:w-[559px] md:px-[24px] md:py-[18px] sm:w-[400px] sm:px-[18px] sm:py-[12px] w-[200px] px-[15px] py-[10px] bg-[#ACACAC] rounded-[50px] font-DM-sans font-normal text-[16px] text-[white] placeholder-white placeholder:font-DM-sans  outline-2 outline-gray-500 " placeholder="Enter your email" onChange={(e)=>{
                    setmessage(e.target.value);

                }} />
                <button className="sm:w-[193px] w-[120px] rounded-[30px] sm:py-[18px] py-[10px]  sm:h-[60px] sm:text-[16px] font-bold text-[15px] font-DM-sans bg-black text-white text-center flex justify-center items-center"  onClick={() => Router.push(`mailto:rmanishakelkar@gmail.com?body=${encodeURIComponent(message)}`)}>
                    Send
                </button>
            </div>
            <div className="flex sm:gap-[22px] gap-[10px]  sm:mt-[70px] mt-[30px]">
                <Link href='https://www.facebook.com/Manisharamkelkar/'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" className="" viewBox="0 0 52 52" fill="none">
                    <rect y="0.788574" width="51.2113" height="51.2113" rx="8" fill="black" className="" />
                    <path d="M27.688 39.1969V27.517H31.8058L32.4223 22.9651H27.6879V20.0589C27.6879 18.741 28.0722 17.843 30.0573 17.843L32.589 17.8418V13.7707C32.1511 13.7153 30.6482 13.5913 28.8999 13.5913C25.2496 13.5913 22.7506 15.7126 22.7506 19.6082V22.9651H18.6223V27.517H22.7506V39.1968H27.688V39.1969Z" fill="white" />
                </svg>
                </Link>
                <Link href='https://twitter.com/manishakelkar4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                        <rect x="0.971802" y="0.788574" width="51.2113" height="51.2113" rx="8" fill="black" />
                        <path d="M30.8835 16.0117V16.0071H32.0841L32.5228 16.0947C32.8153 16.1516 33.0808 16.2261 33.3194 16.3184C33.558 16.4106 33.7889 16.5182 34.0121 16.6411C34.2353 16.7641 34.4377 16.8894 34.6193 17.017C34.7994 17.143 34.961 17.2768 35.1042 17.4182C35.2458 17.5611 35.4667 17.598 35.7668 17.5288C36.067 17.4597 36.3902 17.3636 36.7365 17.2406C37.0829 17.1177 37.4254 16.9793 37.764 16.8256C38.1027 16.6719 38.3089 16.5743 38.3828 16.5328C38.4552 16.4898 38.4936 16.4667 38.4983 16.4636L38.5029 16.4567L38.5259 16.4452L38.549 16.4336L38.5721 16.4221L38.5952 16.4106L38.5998 16.4037L38.6068 16.399L38.6137 16.3944L38.6183 16.3875L38.6414 16.3806L38.6645 16.376L38.6599 16.4106L38.6529 16.4452L38.6414 16.4797L38.6298 16.5143L38.6183 16.5374L38.6068 16.5604L38.5952 16.595C38.5875 16.6181 38.5798 16.6488 38.5721 16.6873C38.5644 16.7257 38.4913 16.8794 38.3528 17.1484C38.2142 17.4174 38.0411 17.6902 37.8333 17.9669C37.6255 18.2436 37.4392 18.4526 37.2745 18.5941C37.1083 18.737 36.9982 18.8369 36.9443 18.8938C36.8905 18.9522 36.8251 19.006 36.7481 19.0552L36.6326 19.1313L36.6096 19.1428L36.5865 19.1544L36.5819 19.1613L36.5749 19.1659L36.568 19.1705L36.5634 19.1774L36.5403 19.189L36.5172 19.2005L36.5126 19.2074L36.5057 19.212L36.4987 19.2166L36.4941 19.2235L36.4895 19.2305L36.4826 19.2351L36.4756 19.2397L36.471 19.2466H36.5865L37.233 19.1083C37.664 19.016 38.0757 18.9046 38.4682 18.7739L39.0916 18.5664L39.1609 18.5434L39.1955 18.5318L39.2186 18.5203L39.2417 18.5088L39.2648 18.4972L39.2879 18.4857L39.3341 18.4788L39.3802 18.4742V18.5203L39.3687 18.5249L39.3571 18.5318L39.3525 18.5387L39.3456 18.5434L39.3387 18.548L39.3341 18.5549L39.3295 18.5618L39.3225 18.5664L39.3156 18.571L39.311 18.5779L39.3064 18.5849L39.2994 18.5895L39.2879 18.6125L39.2763 18.6356L39.2694 18.6402C39.2663 18.6448 39.1686 18.7754 38.9762 19.0322C38.7838 19.2904 38.6799 19.421 38.6645 19.4241C38.6491 19.4287 38.6275 19.4518 38.5998 19.4933C38.5737 19.5363 38.4105 19.7077 38.1103 20.0075C37.8102 20.3072 37.5162 20.5739 37.2284 20.8076C36.939 21.0427 36.7927 21.3317 36.7897 21.6745C36.7851 22.0157 36.7673 22.4016 36.7365 22.832C36.7058 23.2624 36.648 23.7273 36.5634 24.2269C36.4787 24.7265 36.3479 25.2914 36.1709 25.9216C35.9939 26.5518 35.7784 27.1667 35.5244 27.7662C35.2704 28.3656 35.0049 28.9036 34.7278 29.3802C34.4507 29.8567 34.1968 30.2602 33.9659 30.5907C33.735 30.9211 33.5003 31.2324 33.2617 31.5245C33.0231 31.8165 32.7214 32.1455 32.3566 32.5113C31.9902 32.8756 31.7902 33.0754 31.7563 33.1108C31.7209 33.1446 31.5701 33.2707 31.3037 33.4889C31.039 33.7087 30.7542 33.9285 30.4494 34.1484C30.1462 34.3666 29.8676 34.5488 29.6136 34.6948C29.3596 34.8408 29.0533 35.0076 28.6947 35.1951C28.3376 35.3842 27.9512 35.5594 27.5356 35.7208C27.12 35.8822 26.6813 36.0321 26.2195 36.1705C25.7578 36.3088 25.3114 36.4164 24.8804 36.4933C24.4494 36.5701 23.9607 36.6354 23.4142 36.6892L22.5946 36.7699V36.7815H21.0938V36.7699L20.8975 36.7584C20.7667 36.7507 20.659 36.743 20.5743 36.7354C20.4896 36.7277 20.1702 36.6854 19.6161 36.6085C19.062 36.5317 18.6271 36.4548 18.3116 36.378C17.996 36.3011 17.5265 36.1551 16.9031 35.9399C16.2797 35.7247 15.7464 35.5072 15.3031 35.2874C14.8613 35.0691 14.5843 34.9307 14.4719 34.8723C14.3611 34.8155 14.2364 34.7448 14.0978 34.6602L13.89 34.5334L13.8854 34.5265L13.8785 34.5219L13.8716 34.5173L13.867 34.5103L13.8439 34.4988L13.8208 34.4873L13.8162 34.4804L13.8092 34.4758L13.8023 34.4712L13.7977 34.4642L13.7931 34.4573L13.7861 34.4527H13.7746V34.4066L13.7977 34.4112L13.8208 34.4181L13.9247 34.4296C13.9939 34.4373 14.1825 34.4489 14.4904 34.4642C14.7982 34.4796 15.1253 34.4796 15.4716 34.4642C15.818 34.4489 16.172 34.4143 16.5337 34.3605C16.8955 34.3067 17.3226 34.2145 17.8152 34.0838C18.3077 33.9531 18.7603 33.7979 19.1728 33.618C19.5838 33.4367 19.8762 33.3014 20.0502 33.2122C20.2226 33.1246 20.4858 32.9617 20.8398 32.7234L21.3709 32.366L21.3755 32.3591L21.3824 32.3545L21.3894 32.3499L21.3939 32.343L21.3986 32.3361L21.4055 32.3315L21.4124 32.3268L21.417 32.3199L21.4401 32.313L21.4632 32.3084L21.4678 32.2853L21.4748 32.2623L21.4817 32.2577L21.4863 32.2508L21.3016 32.2392C21.1785 32.2316 21.0592 32.2239 20.9437 32.2162C20.8283 32.2085 20.6474 32.1739 20.4011 32.1124C20.1549 32.0509 19.8893 31.9587 19.6046 31.8357C19.3198 31.7128 19.0427 31.5667 18.7734 31.3976C18.504 31.2286 18.3093 31.0879 18.1892 30.9757C18.0707 30.865 17.9168 30.7082 17.7274 30.5053C17.5396 30.3009 17.3765 30.0911 17.2379 29.8759C17.0994 29.6607 16.967 29.4124 16.8408 29.1311L16.6492 28.7115L16.6376 28.6769L16.6261 28.6423L16.6192 28.6193L16.6145 28.5962L16.6492 28.6008L16.6838 28.6077L16.9378 28.6423C17.1071 28.6654 17.3726 28.6731 17.7344 28.6654C18.0961 28.6577 18.3462 28.6423 18.4847 28.6193C18.6233 28.5962 18.7079 28.5808 18.7387 28.5732L18.7849 28.5616L18.8426 28.5501L18.9003 28.5386L18.905 28.5317L18.9119 28.527L18.9188 28.5224L18.9234 28.5155L18.8773 28.504L18.8311 28.4925L18.7849 28.4809L18.7387 28.4694L18.6925 28.4579C18.6618 28.4502 18.6079 28.4348 18.5309 28.4118C18.454 28.3887 18.2462 28.3042 17.9075 28.1581C17.5689 28.0121 17.2995 27.8699 17.0994 27.7316C16.8988 27.5928 16.7075 27.4411 16.5268 27.2774C16.3467 27.1113 16.1489 26.8977 15.9334 26.6364C15.7179 26.3751 15.5255 26.0715 15.3562 25.7256C15.1869 25.3798 15.0599 25.0493 14.9752 24.7342C14.8909 24.4209 14.8353 24.1006 14.809 23.7773L14.7674 23.2931L14.7905 23.2977L14.8136 23.3046L14.8367 23.3162L14.8598 23.3277L14.8829 23.3392L14.906 23.3507L15.2638 23.5121C15.5024 23.6198 15.7987 23.712 16.1528 23.7888C16.5068 23.8657 16.7184 23.908 16.7877 23.9156L16.8916 23.9272H17.0994L17.0948 23.9203L17.0879 23.9156L17.0809 23.911L17.0763 23.9041L17.0717 23.8972L17.0648 23.8926L17.0578 23.888L17.0532 23.8811L17.0301 23.8695L17.007 23.858L17.0025 23.8511L16.9955 23.8465L16.9886 23.8419L16.984 23.8349L16.9609 23.8234L16.9378 23.8119L16.9332 23.805C16.9286 23.8019 16.8624 23.7527 16.7346 23.6574C16.6084 23.5606 16.476 23.4353 16.3375 23.2816C16.1989 23.1279 16.0604 22.9665 15.9219 22.7974C15.7831 22.6279 15.6595 22.4466 15.5524 22.2555C15.4447 22.0634 15.3308 21.819 15.2107 21.5223C15.0922 21.2272 15.0022 20.9298 14.9406 20.63C14.879 20.3303 14.8444 20.0344 14.8367 19.7423C14.829 19.4503 14.8367 19.2005 14.8598 18.993C14.8829 18.7855 14.929 18.551 14.9983 18.2897C15.0676 18.0284 15.1676 17.7517 15.2985 17.4597L15.4947 17.0216L15.5063 16.987L15.5178 16.9524L15.5248 16.9478L15.5294 16.9409L15.534 16.934L15.5409 16.9294L15.5479 16.934L15.5524 16.9409L15.5571 16.9478L15.564 16.9524L15.5709 16.957L15.5755 16.9639L15.5802 16.9709L15.5871 16.9755L15.5986 16.9985L15.6102 17.0216L15.6171 17.0262L15.6217 17.0331L15.9334 17.379C16.1412 17.6095 16.3875 17.867 16.6723 18.1514C16.957 18.4357 17.1148 18.5833 17.1456 18.5941C17.1764 18.6064 17.2148 18.6417 17.261 18.7001C17.3072 18.757 17.4611 18.8931 17.7228 19.1083C17.9845 19.3234 18.327 19.5732 18.7503 19.8576C19.1736 20.142 19.643 20.4225 20.1587 20.6992C20.6744 20.9759 21.2285 21.2256 21.8211 21.4485C22.4137 21.6714 22.8293 21.8175 23.0679 21.8866C23.3065 21.9558 23.7144 22.0442 24.2916 22.1518C24.8688 22.2594 25.3037 22.3286 25.5961 22.3593C25.8886 22.39 26.0887 22.4077 26.1964 22.4123L26.3581 22.4169L26.3535 22.3823L26.3465 22.3478L26.3003 22.0596C26.2696 21.8674 26.2542 21.5984 26.2542 21.2526C26.2542 20.9067 26.2811 20.5878 26.335 20.2957C26.3889 20.0036 26.4697 19.7077 26.5774 19.408C26.6852 19.1083 26.7906 18.8677 26.8937 18.6863C26.9984 18.5065 27.1354 18.3013 27.3047 18.0707C27.474 17.8401 27.6934 17.6019 27.9628 17.3559C28.2321 17.11 28.54 16.8909 28.8863 16.6988C29.2326 16.5067 29.5521 16.3606 29.8445 16.2607C30.137 16.1608 30.3833 16.0955 30.5833 16.0647C30.7835 16.034 30.8835 16.0163 30.8835 16.0117Z" fill="white" />
                    </svg>
                </Link>
                <Link href='https://www.instagram.com/manisharamkelkar/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                        <rect x="0.943665" y="0.788574" width="51.2113" height="51.2113" rx="8" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.7465 26.3941C13.7465 21.2799 13.7465 18.7228 14.9651 16.881C15.5093 16.0585 16.2137 15.3542 17.0361 14.81C18.878 13.5913 21.4351 13.5913 26.5493 13.5913C31.6635 13.5913 34.2206 13.5913 36.0624 14.81C36.8849 15.3542 37.5892 16.0585 38.1334 16.881C39.3521 18.7228 39.3521 21.2799 39.3521 26.3941C39.3521 31.5083 39.3521 34.0654 38.1334 35.9073C37.5892 36.7297 36.8849 37.4341 36.0624 37.9783C34.2206 39.1969 31.6635 39.1969 26.5493 39.1969C21.4351 39.1969 18.878 39.1969 17.0361 37.9783C16.2137 37.4341 15.5093 36.7297 14.9651 35.9073C13.7465 34.0654 13.7465 31.5083 13.7465 26.3941ZM33.1772 26.3944C33.1772 30.0551 30.2097 33.0226 26.5491 33.0226C22.8884 33.0226 19.9209 30.0551 19.9209 26.3944C19.9209 22.7338 22.8884 19.7663 26.5491 19.7663C30.2097 19.7663 33.1772 22.7338 33.1772 26.3944ZM26.5491 30.7801C28.9712 30.7801 30.9347 28.8166 30.9347 26.3944C30.9347 23.9723 28.9712 22.0088 26.5491 22.0088C24.1269 22.0088 22.1634 23.9723 22.1634 26.3944C22.1634 28.8166 24.1269 30.7801 26.5491 30.7801ZM33.439 20.9907C34.2991 20.9907 34.9964 20.2934 34.9964 19.4333C34.9964 18.5731 34.2991 17.8758 33.439 17.8758C32.5789 17.8758 31.8816 18.5731 31.8816 19.4333C31.8816 20.2934 32.5789 20.9907 33.439 20.9907Z" fill="white" />
                    </svg>
                </Link>
                <Link href='https://www.youtube.com/@motorcargirl6079'>
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                    <rect x="0.887329" y="0.788574" width="51.2113" height="51.2113" rx="8" fill="black" />
                    <path d="M27.117 36.3235L21.3383 36.2155C19.4674 36.1778 17.5917 36.253 15.7574 35.8631C12.967 35.2805 12.7693 32.4242 12.5625 30.0283C12.2775 26.66 12.3878 23.2305 12.9257 19.8903C13.2293 18.0161 14.4243 16.8977 16.2723 16.776C22.5106 16.3344 28.7904 16.3867 35.0149 16.5927C35.6723 16.6116 36.3342 16.7149 36.9824 16.8324C40.1821 17.4056 40.2601 20.6424 40.4676 23.3672C40.6744 26.1201 40.5871 28.8872 40.1917 31.6214C39.8745 33.8852 39.2676 35.7836 36.7065 35.9669C33.4976 36.2065 30.3624 36.3995 27.1445 36.338C27.1446 36.3235 27.1261 36.3235 27.117 36.3235ZM23.7197 30.5921C26.1379 29.1733 28.5099 27.778 30.9142 26.3687C28.4916 24.9499 26.124 23.5547 23.7197 22.1453V30.5921Z" fill="white" />
                </svg>
                </Link>
               
            </div>
            <div className="w-full bg-black text-white  h-[71px] mt-[64px] flex flex-col justify-center items-center">
                <p className="font-inter font-normal text-[13px] text-center">
                    © Manisha Ram Kelkar {year}
                    <br />
                    All the above images & brand logos have been procured from official sources with prior permission of the owners
                </p>
            </div>
        </div>
    )
}