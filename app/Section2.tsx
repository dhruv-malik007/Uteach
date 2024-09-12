import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
  })

export default function Section2(){
    return (
            <div className={roboto.className}>
         <section className="relative bg-[#F1F5F9] py-14 lg:py-20 px-6 lg:px-20">
      <div className="relative container mx-auto text-left lg:text-center">
        <h2 className="text-2xl lg:text-6xl font-extrabold text-slate-900 mb-4 relative z-20">
          All the{" "}
          <span className="relative inline-block">
            <span className="underline decoration-orange-500">tools</span>
          </span>{" "}
          that you need
        </h2>
        <p className="text-slate-900 lg:leading-[36px] mb-10 lg:px-44 text-sm lg:text-xl relative z-20">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
        <div className="hidden lg:block relative flex justify-center items-center z-20">
          <Image
            src="/assets/Desktop.svg"
            alt="Main Image"
            width={1100}
            height={640}
            className="mx-auto"
          />
        </div>
        <div className="absolute inset-0 flex flex-row justify-between items-center z-10">
          <Image
            
           src="/assets/leftBlob.svg"
            alt="Right Background"
            width={490}
            height={550}
            className="hidden lg:block absolute left-0 top-0 mt-48 ml-3"
          />
          <Image
            src="/assets/rightBlob.svg"
            alt="Left Background"
            width={423}
            height={600}
            className="hidden lg:pl-16 lg:block absolute -right-20  ml-56 top-0 -mt-10"
          />
        </div>
        <div className="flex flex-col justify-center relative items-center mt-10 lg:-mt-10 flex-wrap lg:flex-nowrap relative z-20">
          <Image
            className="hidden lg:block"
            src="/assets/Lines.svg"
            alt="Lines"
            width={1030}
            height={450}
          />
            <Image
              className="lg:hidden"
              src="/assets/PcFrame.svg"
              alt="PC Frame"
              width={1100}
              height={64}
            />     
        </div>
        <div className="lg:hidden flex flex-col absolute top-40 -mt-12 items-center w-full ">
            <Image
              className="ml-10 absolute -right-6"
              src="/assets/MobileFrame.svg"
              alt="Mobile Frame"
              width={75}
              height={64}
            />
            <Image
              className="-left-6 top-20 mt-10 absolute "
              src="/assets/MobileVector.svg"
              alt="Mobile Vector"
              width={75}
              height={32}
            />
          </div>
      </div>
      <div className="flex gap-4 overflow-scroll no-scrollbar mx-0 lg:gap-16 lg:ml-32 lg:w-10/12" >        
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

    </section>

 </div>
    );
}