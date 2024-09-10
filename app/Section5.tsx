import Image from "next/image";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

  
export default function Section5(){
    return(
        <div className={roboto.className}>
            <div className="p-4 lg:p-20 lg:g-20">
            <div className="text-3xl font-bold mb-4  lg:font-extrabold lg:text-6xl lg:mb-16" style={{color:"#rgba(15,23,42,1)"}}>
        What everyone says
            </div>
        <div className="lg:flex ">
        <div className=" border-2 p-8 shadow-lg rounded-xl m-8">
        <div className="text-sm">
        Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.
        </div>
        <div className="name flex items-center my-4">
        <Image className="m-3" src="./assets/User Thumb.svg" alt="" width={64} height={64}/>
        <div className="container">
        <div className="items-center ml-2">
            Hellen Jummy
        </div>
        <div className="items-center text-sm ml-2 font-extralight">
            Financial Counselor
        </div>
        </div>

        </div>
        </div>
        <div className=" border-2 p-8 shadow-lg rounded-xl m-8" style={{width:"412"}}>
        <div className="text-sm">
        Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.
        </div>
        <div className="name flex items-center my-4">
        <Image className="m-3" src="./assets/User Thumb (1).svg" alt="" width={64} height={64}/>
        <div className="container">
        <div className="items-center ml-2">
            Ralph Edwards
        </div>
        <div className="items-center text-sm ml-2 font-extralight">
            Math Teacher
        </div>
        </div>

        </div>
        </div>
        <div className=" border-2 p-8 shadow-lg rounded-xl m-8" >
        <div className="text-sm">
        Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.
         </div>
        <div className="name items-center flex my-4">
        <Image className="m-3" src="./assets/User Thumb (2).svg" alt="" width={64} height={64}/>
        <div className="container">
        <div className="items-center ml-2">
            Hellena John
        </div>
        <div className="items-center text-sm ml-2 font-extralight">
            Psycology Student
        </div>
        </div>

        </div>
        </div>
        </div>
            </div>
            <div className=" p-4 lg:grid grid-cols-2 lg:p-20 lg:gap-20 lg:justify-around">
            <div className="text">
                <div className="text-2xl font-bold my-4 lg:text-6xl lg:font-extrabold lg:my-20">
        All the cool <span className="underline">features</span>
                </div>
                <div className="text-lg">
                Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                </div>
                <a href="#" className="text-sky-700 text-lg mt-10 flex gap-2">View all the features
            <Image className="" src="/assets/arrow-right.svg" alt="" width={20} height={30}/>
        </a>
            </div>
            <div className="flex justify-center">
            <Image className="m-3" src="./assets/Right.svg" alt="" width={600} height={479}/>
            </div>
            </div>
        </div>
    );
}