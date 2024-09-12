import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
  })

export default function Section1(){
    return(
        <div className={roboto.className}>
        <div className="py-10 px-2 lg:grid grid-cols-2 justify-around gap-20 lg:mt-10 lg:p-20 ">
       <div className="box1 gap-20">
        <div className="gap-8 mb-12">
        
        <h1 className="font-extrabold text-4xl lg:text-7xl gap-2" style={{fontWeight:'900'}}><span className="underline">Teach</span> Students Worldwide</h1>
        {/* <Image className="relative"
        src="/assets/Vector 14.png"
        width={190.5}
        height={12.4}
        alt=""
        /> */}
        <div className="font-light text-xl lg:text-2xl mt-12 mb-12">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies</div>
        
        <div className="bttn flex space-around h-18">
            <button className="w-40 bg-orange-600 text-white px-0 py-3 lg:px-6 lg:py-5  text-center font-bold rounded-md mr-4 lg:w-60 lg:text-xl  " style={{background: "#EA580C"}}>Sign Up Now</button>
            <button className="text-blue-600 lg:text-lg font-semibold text-sm flex items-center">
            <Image className="mr-2"
            src="/assets/play-circle.svg"
            alt=""
            height={20}
            width={20}
            />
                View Demo</button>
            
        </div>
        </div>
    <div className=" mt-12 flex flex-col lg:flex-row  lg:items-center   gap-2">
    <div className="">
    <p className="text-[#475569] text-[16px] mr-10 text-left">
              Trusted by <span className='hidden lg:inline'><br /></span>leading companies
            </p>
    </div> 
   <div className="flex flex-row justify-start items-start gap-5 lg:gap-10 ">
   <Image
        src="/assets/Black and White Collection 3.svg"
        alt=""
        width= {25.21}
        height= {32}
        />
    <Image
        src="/assets/Black and White Collection 2.svg"
        alt=""
        width= {25.21}
        height= {32}
        />
    <Image
        src="/assets/Black and White Collection 11.svg"
        alt=""
        width= {25.21}
        height= {32}
        />
    <Image
        src="/assets/Black and White Collection 20.svg"
        alt=""
        width= {25.21}
        height= {32}
        />
    <Image
        src="/assets/Black and White Collection 1.svg"
        alt=""
        width= {25.21}
        height= {32}
        />
   </div>
        </div>        
       </div>
       <div className="mt-10 flex justify-center lg:mt-6 box2">
        <Image
        src="/assets/Group 50.svg"
        alt=""
        width= {624.6}
        height= {544.53}
        />
       </div>
        </div>
        </div>
    );
}