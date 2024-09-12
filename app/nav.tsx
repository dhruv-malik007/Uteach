"use client"

import Image from 'next/image'
import { useState} from 'react'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin'],
})




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (

    <div className={roboto.className}>
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-8xl  ml-2 lg:ml-20 lg:mr-28">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center h-16">
          <div className="flex-shrink-0">
            
            <a href="#">
            <Image 
      src="/assets/Logo-colored.svg"
      height={60}
      width={103}
      alt=""
      ></Image>
            </a>
        
        </div>
        <div className="hidden lg:px-20 lg:flex space-x-10">     
            <a href="#" className="items-center text-[16px] text-slate-900 font-bolder hover:text-gray-800">Products</a>         
            <a href="#" className="items-center text-[16px] text-slate-900 font-bolder hover:text-gray-800">Solutions</a>         
            <a href="#" className="items-center text-[16px] text-slate-900 font-bolder hover:text-gray-800">Pricing</a>    
            <a href="#" className="items-center text-[16px] text-slate-900 font-bolder hover:text-gray-800"><div className="inline-block relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-[16px] text-slate-900 font-bolder hover:text-gray-800"
            >
              Resources{"  "}
              <Image
                src="/assets/chevron-down.png"
                alt="icon"
                className='mx-2'
                width={20}
                height={20}
              />
            </button>
            {dropdownOpen && (
              <ul className="absolute mt-2 py-2 w-48 bg-white border rounded shadow-lg z-50">
                <li>
                  <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Dropdown 1
                  </Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Dropdown 2
                  </Link>
                </li>
                <li>
                  <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Dropdown 3
                  </Link>
                </li>
              </ul>
            )}
          </div></a>           
        </div>
          </div>
          <div className="hidden lg:flex items-center space-x-2">           
          <Link href="/" className="text-[16px] text-slate-900 hover:text-gray-900">
            Log In
          </Link>
          <Link
            href="/"
            className="bg-white border-[3px] border-slate-900 text-slate-900 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Sign Up Now
          </Link>          
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-gray-900">
              Products
            </Link>
            <Link href="/" className="block text-gray-700 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="/" className="block text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center w-full text-gray-700 hover:text-gray-900"
              >
                Resources{"  "}
                <Image
                  src="/assets/chevron-down.png"
                  alt="icon"
                  className='mx-2'
                  width={20}
                  height={20}
                />
              </button>
              {dropdownOpen && (
                <ul className="mt-2 py-2 w-full bg-white border rounded shadow-lg">
                  <li>
                    <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                     Dropdown 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Dropdown 2
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Dropdown 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link href="/" className="block pt-6 text-gray-700 hover:text-gray-900">
              Log In
            </Link>
            <Link href="/" className="block bg-white border-[3px] border-gray-700 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100">
              Sign Up Now
            </Link>
          </nav>
        </div>
      )}
    </nav>
    </div>
  )

}
export default Navbar
