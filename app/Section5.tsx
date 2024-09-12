'use client'

import Image from "next/image";
import { useRef } from "react";
import { Roboto } from 'next/font/google'
import Card2 from "./Card2";
import Link from "next/link";
import Card from "./Card";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
  })

export default function Section5(){
const sliderRef = useRef<HTMLDivElement>(null);
const comment = [
    {
      content: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      name: "Hellen Jummy",
      title: "Financial Counselor",
      assetsrc: "/assets/User Thumb.svg"
    },
    {
      content: "Odio rhoncus ornare rhoncus ornare ut quam. Molestie rhoncus ornare vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultrices neque, hac ultricies dolor.",
      name: "Ralph Edwards",
      title: "Math Teacher",
      assetsrc: "/assets/User Thumb (1).svg"
    },
    {
      content: "Sagittis nunc egestas leo et malesuada  rhoncus ornare urna risus. Morbi proin  rhoncus ornareet cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
      name: "Hellena John",
      title: "Psychology Student",
      assetsrc: "/assets/User Thumb (2).svg"
    },
    {
      content: "Sapien, sollicitudin rhoncus ornare et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
      name: "Ellena John",
      title: "Psychology Student",
      assetsrc: "/assets/User Thumb.svg"
    },
    {
        content: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
        name: "Hellen Jummy",
        title: "Financial Counselor",
        assetsrc: "/assets/User Thumb (1).svg"
    },
    {
        content: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
        name: "Hellen Jummy",
        title: "Financial Counselor",
        assetsrc: "/assets/User Thumb (2).svg"
    }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={roboto.className}>
    <section className="bg-white py-14 px-6 lg:px-20 lg:py-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">What everyone says</h2>
          <div className="hidden lg:flex space-x-4">
            <button
              onClick={scrollLeft}
              className="rounded-full"
            >
              <Image src="/assets/leftbtn.svg" alt="Left Arrow" width={48} height={48} />
            </button>
            <button
              onClick={scrollRight}
              className="rounded-full"
            >
              <Image src="/assets/rightbtn.svg" alt="Right Arrow" width={48} height={48} />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 no-scrollbar" ref={sliderRef}>
            {comment.map((testimonial, index) => (
              <Card2
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                title={testimonial.title}
                imageSrc={testimonial.assetsrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="hidden lg:block relative bg-white w-full py-14 pb-44 px-6 lg:px-20 lg:pt-16 lg:pb-56">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl lg:text-6xl font-bold text-gray-900 mb-4">
            All the{" "}
            <span className="relative inline-block underline decoration-orange-500 " style={{textDecorationThickness: '7px',
                textDecorationStyle: 'initial', }}>
              cool features
            </span>
          </h2>
          <p className="text-gray-700 pt-5 mb-6  lg:text-xl pr-12 leading-9 font-normal ">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
            ullamcorper non viverra a, neque orci
          </p>
          <Link href="/" className="text-blue-600 mt-32 text-lg font-semibold">
            View all the features &rarr;
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-32">
          <div className="absolute  top-0  w-full h-full lg:w-auto lg:h-auto z-10 -right-28 lg:right-0">
            <Image
              src="/assets/BgImg.png"
              alt="Background Blob"
              width={500}
              height={400}
              className="hidden lg:block lg:mr-14 lg:mt-9 z-20 lg:w-[700px] lg:h-auto w-[500px] "
            />
          </div>
          <div className="relative  z-20 mb-4 w-2/3 lg:w-1/3 -ml-12 lg:ml-12 lg:pt-24 lg:mb-8">
            {/* <Image
              src="/assets/BgImg.png"
              alt="Background Blob"
              width={1100}
              height={400}
              className="z-10 sm: lg:hidden lg:h-auto  absolute max-w-[195%] sm:max-w-[140%] sm:mb-60 "
            /> */}

            <div className="p-4 -ml-10 mt-5 mr-7 lg:-mt-3 lg:-mr-5 ">
              <Card
                tag="Popular"
                tagColor="bg-blue-200 text-blue-700"
                title="Design for how people think"
                description="Aliquam ut euismod condimentum elementum ultricies gfgd volutpat sit non."
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className=" lg:hidden p-4 ml-2 max-w-sm">
      <div className='mb-28'>
        <h2 className="text-2xl font-bold text-left">
          All the cool{" "}
          <span className="underline decoration-orange-400">features</span>
        </h2>
        <p className="text-gray-700 mt-2 font-normal leading-[22.4px]">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullgiat cras ullgiat cras ullgiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>
        <Link href="#" className="text-blue-600 font-semibold mt-6 inline-block">
          View all the features →
        </Link>
      </div>

      <div className="mt-8 mx-auto">        
        <div className='p-4 pr-10 -ml-6 px-10 w-5/6'>
          <Card
            tag="Popular"
            tagColor="bg-blue-200 text-blue-700"
            title="Design for how people think"
            description="Agestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            link="#"
          />
        </div>
        <div className="-mt-[315px] -mr-52 overflow-y-hidden flex justify-center ">
          <Image
            src="/assets/BgImg.png"
            width={900}
            height={100}
            alt="Image 1"
            className=""
          />
        </div>
      </div>
    </div>
    </div>
  );
};