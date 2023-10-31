// import Header from "@/components/header/header";
// import Hero from "@/components/hersection/page";
import Header from "../header/header"
import Hero from "./herosection/page"
import About from "./about/page"
import Sliding from "./herosection/sliding"
import Work from "./work/page"
import Interview from "./interviews/page"
import Brand from "./brand/page"
import Footer from "../footer/lightfooter"
import BackToTopButton from "../topbutton/page"
export default function Home() {
  
    return (
        <div className="overflow-hidden">
            <Header></Header>
            <Hero></Hero>
            <BackToTopButton></BackToTopButton>
            <About></About>
           
            <Work></Work>
            <Interview></Interview>
            <Brand></Brand>
            <Footer></Footer>
        </div>
    )
}