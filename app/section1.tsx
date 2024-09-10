import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default function Section1(){
    return(
        <div className={roboto.className}>
        <div className="py-10 px-2 lg:grid grid-cols-2 justify-around gap-20 lg:mt-10 lg:p-20 ">
       <div className="box1 gap-20">
        <div className="gap-8 mb-12">
        
        <h1 className="font-black text-4xl lg:text-7xl gap-2"><span className="underline">Teach</span> Students Worldwide</h1>
        {/* <Image className="relative"
        src="/assets/Vector 14.png"
        width={190.5}
        height={12.4}
        alt=""
        /> */}
        <div className="font-normal text-xl lg:text-2xl mt-12 mb-12">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies</div>
        
        <div className="bttn flex space-around h-18">
            <button className="border-2 border-white text-white text-xl text-semibold rounded-xl px-14 py-5" style={{background: "#EA580C"}}>Sign Up Now</button>
            <button className="flex ml-6 font-semibold text-xl text-blue-600 mt-4">
            <Image className="mr-2"
            src="/assets/play-circle.svg"
            alt=""
            height={30}
            width={30}
            />
                View Demo</button>
            
        </div>
        </div>
    <div className=" lg:grid grid-cols-2 space-around items-center gap-x-0">
    <div className="">
        <div className="text-base ">
            <p>Trusted by</p>
        leading companies
        </div>
    </div> 
   <div className="mt-4 lg:mt-0 grid grid-cols-5 item-center ">
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