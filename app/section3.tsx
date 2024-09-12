import Image from "next/image";
import { Roboto } from 'next/font/google'
import Link from "next/link";
import Card from './Card';

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
  })

  
export default function Section3(){
    return(
        <div className={roboto.className}>   
        <section className="relative bg-white pt-14 md:mb-72 pb-56 lg:pb-10 px-6 lg:px-20 lg:pt-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0 z-20">
          <h2 className="text-2xl lg:text-6xl font-bold lg:font-extrabold text-gray-900 mb-4">
            An{" "}
            <span className="relative inline-block underline decoration-orange-500">
              all-in-one
            </span>{" "}
            app that makes it easier
          </h2>
          <p className="text-gray-700  lg:hidden pb-5">
            Est et in pharetra magna adipiscing ornare aliquam. Tellus arcu sed consequat ac velit ut eu blandit. Ullamcorper ornare in et egestas dolor orci.
          </p>
          <ul className=" list-image-[url(/tick.svg)] text-gray-700 mb-10 pl-6 lg:pt-5 lg:pl-6">
            <li className="text-xl font-normal leading-[36px] ">
              Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="text-xl font-normal leading-[36px] ">
              Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li className="text-xl font-normal leading-[36px] ">
              Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>
          <Link
            href="/about"
            className="text-blue-600 font-semibold text-lg lg:text-xl inline-flex items-center"
          >
            Find more about the app
            <Image
              src="/assets/arrow-right.svg"
              alt="Arrow Right"
              width={20}
              height={20}
              className="ml-2"
            />
          </Link>
        </div>
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative w-full flex justify-center">
        
            <Image
              src="/assets/Icons.svg"
              alt="Background Blob"
              width={140}
              height={500}
              className="hidden lg:block absolute lg:-top-30 lg:right-96 lg:mr-56 z-20"
            />
            <Image
              src="/assets/Blob.svg"
              alt="Background Blob"
              width={260}
              height={200}
              className="absolute top-16 w-5/6 mr-44 -mt-10 lg:w-[350px]  lg:mr-96 z-20"
            />
            <Image
              src="/assets/video.svg"
              alt="Desktop Image"
              width={1100}
              height={600}
              className="relative z-30 mx-auto lg:mx-0"
            />
          </div>
          <div className="absolute top-48 md:top-96 bottom-0 right-5 lg:top-72 flex flex-row gap-x-2 lg:flex-row lg:space-x-4 transform -translate-y-1/2 lg:translate-y-0 z-40 w-5/6 lg:w-auto">
            <div className="w-full lg:w-1/3">
              <Card
                tag="Featured"
                tagColor="bg-purple-200 text-purple-700"
                title="The map of mathematics"
                description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                link="#"
              />
            </div>
            <div className="w-full lg:w-1/3">
              <Card
                tag="Popular"
                tagColor="bg-blue-200 text-blue-700"
                title="Design for how people think"
                description="Aliquam ut euismod condimentum elementumg ultricies volutpat sit non."
                link="#"
              />
            </div>
            <div className=" hidden lg:block w-full lg:w-1/3">
              <Card
                tag="New"
                tagColor="bg-green-200 text-green-700"
                title="International & commercial law"
                description="Molestie integer eu arcu, grfsgdfg gdfgfgfg mauris bibendum dui."
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
}