import Image from "next/image";
import { Roboto } from 'next/font/google'
import Link from "next/link";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
  })

  
export default function Section4(){
    return(
        <div className={roboto.className}>
        
         <section className="bg-white py-20 px-6 lg:pb-28 lg:-pt-20 -mt-40   lg:px-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Image src="/assets/Col.svg" alt="Student 1" width={600} height={650} className="rounded-md" />
          </div>
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-3xl lg:text-6xl font-extrabold text-slate-900 mb-6">
              Meet international
              <Image
                src="/assets/plane-departure.svg"
                alt="Plane Departure Icon"
                width={64}
                height={64}
                className="inline-block -ml-14 -mt-12 lg:-ml-20 lg:-mt-24 p-4 lg:p-0"
              /> 
              <br />
              students & teachers
            </h2>
            <p className="text-slate-700 mb-8 text-[16px] font-normal leading-[22.4px] text-left sm:text-[20px] sm:leading-[36px]">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. 
              {/* <br /> */}
              Placera ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
            </p>
            <Link href="/explore" className="text-blue-600 text-lg font-semibold lg:text-xl inline-flex items-center">
              
                Explore teachers and students
                <Image 
                  src="/assets/arrow-right.svg" 
                  alt="Arrow Right" 
                  width={20} 
                  height={20} 
                  className="ml-2"
                />
              
            </Link>
          </div>
        </div>
      </section>
        
        <div className="g-20 p-4 lg:grid grid-cols-3 lg:p-20" style={{background: "rgba(15, 23, 42, 1)"}}>
        <div className="text-center my-10 lg:my-0">
        <div className="flex justify-center"><Image className="" src="/assets/icon.png" alt="" width={64} height={64}/></div>
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