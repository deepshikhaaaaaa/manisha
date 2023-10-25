
import Image from "next/image"
export default function About() {
    return (
        <div className="flex justify-center items-center gap-[47px] mb-[151px]">
            <div className="flex sm:mt-[168px] mt-[50px]  md:gap-[17px] sm:gap-[10px] gap-[5px] sm:ml-[20px] ml-[10px]">
                <Image src='/abouttt.png' height={472} width={343} className="md:h-[472px]  md:w-[343px] sm:h-[300px] sm:w-[190px] h-[290px] w-[220px] mt-[-25px]" alt="manisha">

                </Image>
                <div className="gap-[23px] flex flex-col">
                    <Image src='/aboutt.png' height={252} width={294} alt="manisha"></Image>
                    <Image src='/about.png' height={323} width={247} alt="manisha"></Image>

                </div>
            </div>
            <div>
                <h1 className="mt-[108px] font-play-fair md:text-[106px] sm:text-[70px] text-[25px] italic">
                    About
                </h1>
                <p className="sm:w-[511px] w-[300px]  md:text-[14px] font-sen font-normal sm:text-[10px] text-[7px] ">
                    Manisha Ram Kelkar is an Indian actress and trained Kathak dancer who appears in Bollywood (Hindi), Marathi movies and also works as an anchor for many show and events. Manisha Kelkar made her acting debut with a Multi Starrer Marathi movie Hyancha Kahi Nem Nahi directed by Kedar Shinde. Bandook Critical Acclaim is her Bollywood film. She has also done one Telugu film ‘Friend Request’. Manisha has also hosted many events like Times of India red carpet, Asian film festival, Times Marathi Film Technical Awards, Comedy Express, Marathi film awards on E Tv Marathi, Cricket World Cup host on Zee 24 Taas and other shows. She was also a strong contender in first ever reality shows ‘Zhunj Marathmoli’ (first ever adventure Marathi reality show) on E Tv Marathi.
                    <br />
                    <br />
                    Manisha was born in Mumbai. Her parents also worked in the Indian film industry. She is the daughter of noted writer Ram Kelkar (who has written scripts for films like Hero, Ram Lakhan, Khalnayak) and Jeevan Kala, an actress and trained Kathak dancer (who danced in the song Hasta Hua Noorani Chehra among many others).
                    <br />
                    <br />
                    Manisha holds a B.Sc. degree in microbiology and a post-graduate degree in mass communication and filmmaking. She is also a Kathak dancer. Manisha love pets, also love to travel, participate in adventurous sports and social activities for the cause.
                </p>
            </div>
        </div>
    )
}