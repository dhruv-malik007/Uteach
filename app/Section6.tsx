import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

  
export default function Section6(){
    return(
        <div className={roboto.className}>
            <div className="grid grid-cols-1 lg:items-center lg:px-0 lg:grid lg:grid-cols-3 lg:justify-between lg:py-20 " style={{background: "rgba(250, 204, 21, 1)"}}>
             <div
   className="bg-cover h-96 lg:bg-cover lg:h-full"
   style={{
    backgroundImage: `url('/assets/Cards Round.svg')`,
     height: "300px",
    }}
  ></div>
             <div className="text-center">
                <div className="text-5xl font-extrabold">
                    Join a world of learning
                </div>
                <div className="text-xl text-center my-8">
                Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
Risus elit et fringilla habitant ut facilisi.
                </div>
                <button className="text-center text-white font-bold py-3 rounded-xl px-12 bg-orange-600">Sign Up Now</button>
             </div>
             <div
   className="bg-cover h-96 lg:bg-cover lg:h-full"
   style={{
    backgroundImage: `url('/assets/Cards Round (1).svg')`,
     height: "300px",
    }}
  ></div>
        </div>
        </div>
    );
}