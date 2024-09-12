import Image from "next/image";
import { Roboto } from 'next/font/google'
import Link from "next/link";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
  })

  
export default function Footer(){
    return(
        <div className={roboto.className}>
            <div className="px-1 md:px-20 py-8" style={{background: "rgba(15, 23, 42, 1)"}}>
            <div className=" md:grid grid-cols-6 my-10">
           <div><Image className="m-3" src="./assets/Links.svg" alt="" width={173} height={35}/></div>
     
             <ul className=" mb-4 text-white text-xl space-y-6">
             <a href="#"><li className="font-bold mt-20 lg:mt-0">Products</li></a>
             <a href="#"><li className="my-6">Pricing</li></a>
             <a href="#"><li className="my-6">Overview</li></a>
             <a href="#"><li className="my-6">Browse</li></a>
             <a href="#"><li className="my-6">Accesbility<span className="bg-[#F3E8FF] text-black  px-1 py-1 text-xs ml-2">BETA</span></li></a>
             </ul>
             <ul className="mb-4 text-white text-xl space-y-6">
             <a href="#"><li className="font-bold mt-20 lg:mt-0">Solutions</li></a>
             <a href="#"><li className="my-6" >Brainstorming</li></a>
             <a href="#"><li className="my-6">Ideation</li></a>
             <a href="#"><li className="my-6">Wireframing</li></a>
             <a href="#"><li className="my-6">Research</li></a>
             </ul>
             <ul className="mb-4 text-white text-xl space-y-6">
             <a href="#"><li className="font-bold mt-20 lg:mt-0">Resources</li></a>
             <a href="#"><li className="my-6">Help Center</li></a>
             <a href="#"><li className="my-6">Blog</li></a>
             <a href="#"><li className="my-6">Tutorials</li></a>
             <a href="#"><li className="my-6">FAQs</li></a>
             </ul>
             <ul className="mb-4 text-white text-xl space-y-6">
             <a href="#"><li className="font-bold mt-20 lg:mt-0">Support</li></a>
             <a href="#"><li className="my-6">Contact Us</li></a>
             <a href="#"><li className="my-6">Developers</li></a>
             <a href="#"><li className="my-6">Documentation</li></a>
             <a href="#"><li className="my-6">Integration</li></a>
             </ul>
             <ul className="mb-4  text-white text-xl space-y-6">
             <a href="#"><li className="font-bold mt-20 lg:mt-0">Company</li></a>
             <a href="#"><li className="my-6">About</li></a>
             <a href="#"><li className="my-6">Press</li></a>
             <a href="#"><li className="my-6">Events</li></a>
             <a href="#"><li className="my-6">Request Demo <span>&rarr;</span></li></a>
             </ul>
            </div>
        <hr/>
        <div className="md:flex justify-between text-white my-6">
            <div className="text-lg">uteach @ 2023. All rights reserved.</div>
            <div className="text-lg mt-8 lg:mt-0 md:text-base flex mt-2 gap-0 md:flex justify-around">
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6 "> <a href="" >Terms   </a> </li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6"> <a href="" >Privacy </a> </li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6 hidden lg:block"> <a href="" >Contact </a> </li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6"> <a href="" > &#127760; EN      </a> </li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6"> <a href="" ><span className="hidden lg:inline">&#8364;</span>EUR</a></li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6"><Link href="#" className="hover:text-white flex items-center text-[#E2E8F0]">
              <Image src="/assets/accessibility.svg" alt="Info" width={24} height={48} className="mr-2" />
            </Link> </li>
            </div>
        </div>

            </div>
        </div>
    );
}