import Header from "../header/header";
import Footer from "../footer/page";
import Hero from "./herosection/page";
import News from "./News/page";
// import Footer from "../footer/page";
export default function Racing() {
    return (
        <div className="">
            {/* <Header></Header> */}
            <div className="bg-black ">
            <Hero></Hero>
            {/* <Footer></Footer> */}
            <div className="sm:px-[100px] px-[10px]">
            <News></News>
            </div>
            </div>
           <Footer></Footer>
        </div>
    )
}