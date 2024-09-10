import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

  
export default function Section3(){
    return(
        <div className={roboto.className}>   
        <div className="p-4 lg:flex lg:p-20 items-center justify-center gap-20">
            <div className="box1 lg:w-2/5" >
            
                   
        <div className="font-extrabold text-3xl lg:font-black lg:text-6xl">
        An <span className="underline">all-in-one</span> app that makes it easier
        </div>
        <div className="lg:text-xl ">
        <ul className="my-4 lg:my-16 ml-8 list-image-[url(/tick.svg)]">
        <li>5 cups chopped Porcini mushrooms</li>
        <li>5 cups chopped Porcini mushrooms</li>
        <li>5 cups chopped Porcini mushrooms</li>
        </ul>
        <a href="#" className="text-blue-500 ml-8 flex gap-2">Find more about the app 
            <Image className="" src="/assets/arrow-right.svg" alt="" width={20} height={30}/>
        </a>
        </div>
            </div>
       <div className=" lg:w-6/12">
       <div className="">
            <Image
            src="/assets/Desktop2.svg"
            alt=""
            width={656}
            height={546.97}
            />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 lg:gap-8 bg-white" >
                <div className=" lg:p-3 lg:shadow-xl lg:rounded-xl">
                   <div className="text-purple-500 shadow-2xl shadow-black w-fit px-4 bg-violet-200 rounded">
                    Feature
                   </div>
                    <div className="font-bold my-4 ">
                        The map of<br/> mathematics
                    </div>
                    <div className="text-sm">
                    Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                    </div>
                    <div className=" flex mx-2 justify-center ring-offset-2 ring lg:px-6 py-2 mt-8 rounded-sm">
                    <button >
                        <p className="text-xs lg:text-base">Take Lesson</p>
                    </button>
                    </div>
                </div>
                <div className="lg:p-3 lg:shadow-xl lg:rounded-xl">
                   <div className="text-blue-500 w-fit px-4 bg-sky-200 rounded">
                    Popular
                   </div>
                    <div className="font-bold my-4 ">
                        Design for how people think
                    </div>
                    <div className="text-sm">
                    Aliquam ut euismod condimentum ultricies volutpat sit non.                     
                    </div>
                    <div className="flex mx-2 justify-center ring-offset-2 ring lg:px-6 py-2 mt-8 rounded-sm">
                    <button >
                    <p className="text-xs lg:text-base">Take Lesson</p>
                    </button>
                    </div>
                </div>
                <div className="hidden lg:block lg:p-3 lg:shadow-xl lg:rounded-xl">
                   <div className="text-green-500 w-fit px-4 bg-green-200 rounded">
                    New
                   </div>
                    <div className="font-bold my-4 ">
                        International & commercial law
                    </div>
                    <div className="text-sm">
                    Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui. 
                     </div>
                    <div className="flex mx-2 justify-center ring-offset-2 ring lg:px-6 py-2 mt-8 rounded-sm">
                    <button >
                    <p className="text-xs lg:text-base">Take Lesson</p>
                    </button>
                    </div>
                </div>

            </div>
           
        </div>



       </div>
        </div>
        </div>
    );
}