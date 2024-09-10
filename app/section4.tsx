import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

  
export default function Section4(){
    return(
        <div className={roboto.className}>
        <div className="p-4 lg:flex lg:p-20 lg:gap-0 items-center justify-center">
        <div className="flex justify-center lg:w-full">
            <Image 
        src="/assets/Col.svg"
        alt=""
        width= {600}
        height= {651}
        />
        </div>
        <div className="side w-11/12">
        <Image className=""
        src="/assets/plane-departure.svg"
        alt=""
        width= {64}
        height= {64}
        />
        <div className="text-2xl font-extrabold lg:font-extrabold lg:text-6xl">
            Meet the international students & teachers
        </div>
        <div className=" text-base my-4 lg:text-xl lg:my-8">
        Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
        </div>
        <a href="#" className="text-blue-500 my-6 flex gap-2">Explore teachers and students
            <Image className="" src="/assets/arrow-right.svg" alt="" width={20} height={30}/>
        </a>
        </div>
        </div>
        
        <div className="g-20 p-4 lg:grid grid-cols-3 lg:p-20" style={{background: "rgba(15, 23, 42, 1)"}}>
        <div className="text-center my-10 lg:my-0">
        <div className="flex justify-center"><Image className="" src="/assets/icon.svg" alt="" width={64} height={64}/></div>
        <div className="text-yellow-500 my-2 font-bold text-6xl">
            195
        </div>
        <div className="text-yellow-500 font-semibold my-2 text-2xl">
            user countries
        </div>
        </div>
        <div className="text-center my-10 lg:my-0">
        <div className="flex justify-center"><Image className="" src="/assets/icon(1).svg" alt="" width={64} height={64}/></div>
        <div className="text-yellow-500 my-2 font-extrabold text-6xl">
            1M 
        </div>
        <div className="text-yellow-500 font-semibold my-2 text-2xl">
            valued teachers
        </div>
        </div>
        <div className="text-center my-10 lg:my-0">
        <div className="flex justify-center"><Image className="" src="/assets/icon(2).svg" alt="" width={64} height={64}/></div>
        <div className="text-yellow-500 my-2 font-extrabold text-6xl">
            17M
        </div>
        <div className="text-yellow-500 font-semibold my-2 text-2xl">
            happy students
        </div>
        </div>
        </div>
        </div>
     

    );
}