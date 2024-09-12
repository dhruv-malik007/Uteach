import Image from "next/image";
import { Roboto } from 'next/font/google'
import Link from "next/link";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ['latin'],
  })

  
export default function Section6(){
    return(
        <div className={roboto.className}>
        <section className="relative bg-[#FACC15] py-56 px-6 lg:px-20 lg:py-80 text-center">
      <div className="container mx-auto relative">
        <h2 className="text-3xl lg:text-6xl font-extrabold text-slate-900 mb-6">
          Join a world of learning
        </h2>
        <p className="text-slate-900 mb-8 text-lg lg:text-xl">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.<br/>
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <Link href="/" className="bg-orange-600 text-white px-6 py-4 rounded-md text-lg font-semibold inline-block " style={{ cursor:'grab' }}>
        
            Sign Up Now
        
        </Link>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center lg:flex-wrap">
          {/* Desktop Images */}
          <Image src="/assets/Cards Round.svg" alt="Person 1" width={470} height={600} className="hidden lg:block absolute -top-48 left-0 -ml-20" />
          <Image src="/assets/Cards Round (1).svg" alt="Person 2" width={470} height={600} className="hidden lg:block absolute -top-72 right-0 -mr-20" />

          {/* Mobile Images are as follows */}
          <Image src="/assets/Cards Round (4).svg" alt="Person 1" width={360} height={160} className="lg:hidden absolute -top-52" />
          <Image src="/assets/Cards Round (5).svg" alt="Person 2" width={360} height={160} className="lg:hidden absolute top-64" />
        </div>
      </div>
    </section>
        </div>
    );
}