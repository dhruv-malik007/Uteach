import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

  
export default function Footer(){
    return(
        <div className={roboto.className}>
            <div className="px-1 md:px-20 py-8" style={{background: "rgba(15, 23, 42, 1)"}}>
            <div className=" md:grid grid-cols-6 my-10">
           <div><Image className="m-3" src="./assets/Links.svg" alt="" width={173} height={35}/></div>
     
             <ul className=" mb-4 text-white text-xl space-y-6">
             <a href="#"><li className="font-bold">Products</li></a>
             <a href="#"><li>Pricing</li></a>
             <a href="#"><li>Overview</li></a>
             <a href="#"><li>Browse</li></a>
             <a href="#"><li>Accesbility</li></a>
             </ul>
             <ul className="mb-4 text-white text-xl space-y-6">
             <a href="#"><li className="font-bold">Solutions</li></a>
             <a href="#"><li>Brainstorming</li></a>
             <a href="#"><li>Ideation</li></a>
             <a href="#"><li>Wireframing</li></a>
             <a href="#"><li>Research</li></a>
             </ul>
             <ul className="mb-4 text-white text-xl space-y-6">
             <a href="#"><li className="font-bold">Resources</li></a>
             <a href="#"><li>Help Center</li></a>
             <a href="#"><li>Blog</li></a>
             <a href="#"><li>Tutorials</li></a>
             <a href="#"><li>FAQs</li></a>
             </ul>
             <ul className="mb-4 text-white text-xl space-y-6">
             <a href="#"><li className="font-bold">Support</li></a>
             <a href="#"><li>Contact Us</li></a>
             <a href="#"><li>Developers</li></a>
             <a href="#"><li>Documentation</li></a>
             <a href="#"><li>Integration</li></a>
             </ul>
             <ul className="mb-4  text-white text-xl space-y-6">
             <a href="#"><li className="font-bold">Company</li></a>
             <a href="#"><li>About</li></a>
             <a href="#"><li>Press</li></a>
             <a href="#"><li>Events</li></a>
             <a href="#"><li>Request Demo</li></a>
             </ul>
            </div>
        <hr/>
        <div className="md:flex justify-between text-white my-6">
            <div className="text-sm">uteach @ 2023. All rights reserved.</div>
            <div className="text-xs md:text-base flex mt-2 gap-0 md:flex justify-around">
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6 "> <a href="" >Terms   </a> </li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6"> <a href="" >Privacy </a> </li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6"> <a href="" >Contact </a> </li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6"> <a href="" > &#127760; EN      </a> </li>
                    <li className="list-none mx-2 md:list-none mx-2 md:mx-6"> <a href="" > 	&#8364; EUR    </a> </li>
            
            </div>
        </div>

            </div>
        </div>
    );
}