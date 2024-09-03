"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <div className={roboto.className}>
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
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
          <div className="hidden lg:flex space-x-6">         
              <a href="#" className="font-bold text-2xl hover:text-black">Products</a>         
              <a href="#" className="font-bold text-2xl hover:text-black">Solutions</a>         
              <a href="#" className="font-bold text-2xl hover:text-black">Pricing</a>    
              <a href="#" className="font-bold text-2xl hover:text-black">Resources</a>           
          </div>
          <div className="hidden lg:flex items-center space-x-2">           
              <a  href="#" className="text-2xl hover:text-black">Log In</a>
              <a href="#" className="px-4 py-2 text-2xl border rounded-xl text-black border-black hover:bg-black hover:text-white">
                Sign Up Now
              </a>           
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          
              <a href="#" className="block hover:text-black">Products</a>           
              <a href="#" className="block hover:text-black">Solutions</a>
              <a href="#" className="block hover:text-black">Pricing</a>          
              <a href="#" className="block hover:text-black">Resources</a>           
              <a href="#" className="block hover:text-black">Log In</a>
           
        
              <a href="#" className="block px-4 py-2 border rounded-full text-black border-black hover:bg-black hover:text-white">
                Sign Up Now
              </a>
            
          </div>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar
