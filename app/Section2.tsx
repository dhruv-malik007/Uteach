import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

export default function Section2(){
    return (
        <div className="px-0 lg:section2 p-20" style={{background:"#F1F5F9"}}>
            <div className={roboto.className}>
            <div className="text-center text-4xl md:text-6xl font-extrabold">
            <h1>All the tools that you need</h1>
        </div>
        
        <div className="flex justify-center">
        <Image
        src="/assets/Vector 14.png"
        width={121}
        height={10}
        alt=""
        />
        </div>
        <div className="text-base md:text-2xl text-center mt-5">
        <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        </div>
        </div>
        <div className="desktop flex mt-24 justify-center">
        <Image
        src="/assets/Desktop.svg"
        width={1100}
        height={640}
        alt=""
        />
        </div>
        <Image className="ml-0 overflow-hidden xl:ml-24"
        src="/assets/Lines.svg"
         width={1093}
        height={78}
        alt=""
        />
        <div className="flex gap-4 overflow-hidden mx-0 lg:grid lg:ml-12 grid-cols-9 lg:w-10/12" >
        {/* <div className="grid grid-cols-9 " style={{width:"1160px"}}> */}
        <Image
        src="/assets/App-thumbnail.svg"
        width={64}
        height={64}
        alt=""
        />
        <Image
        src="/assets/App-thumbnail (1).svg"
        width={64}
        height={64}
        alt=""
        />
        <Image
        src="/assets/App-thumbnail (2).svg"
        width={64}
        height={64}
        alt=""
        />
        <Image
        src="/assets/App-thumbnail (3).svg"
        width={64}
        height={64}
        alt=""
        />
        <Image
        src="/assets/App-thumbnail (4).svg"
        width={64}
        height={64}
        alt=""
        />
        <Image
        src="/assets/App-thumbnail (5).svg"
        width={64}
        height={64}
        alt=""
        />
        <Image
        src="/assets/App-thumbnail (6).svg"
        width={64}
        height={64}
        alt=""
        />
        <Image
        src="/assets/App-thumbnail (7).svg"
        width={64}
        height={64}
        alt=""
        />
        <Image
        src="/assets/App-thumbnail (8).svg"
        width={64}
        height={64}
        alt=""
        />

        </div>




        </div>
    );
}