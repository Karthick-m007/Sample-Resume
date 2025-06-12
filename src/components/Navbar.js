// import React from 'react'
// import navlogo from "../assets/Untitled_logo_1_free-file-removebg-preview.png"
// import Headermaincontent from './Headermaincontent'

// export default function Navbar() {
//     return (
//         <div>
//             <div className='flex justify-between    border-b-2 border-black  py-4 '>
//                 <img src={navlogo} alt="" className='ms-16 w-24 h-16 ' />

//                 <ul className='flex items-center'>
//                     <li className='me-12 text-xl'>Home</li>
//                     <li className='me-12 text-xl' >About</li>
//                     <li className='me-12 text-xl'>Services</li>
//                     <li className='me-12 text-xl'>Contact</li>
//                 </ul>
//                 <button className='me-16'>DARK</button>


//             </div>
//             <Headermaincontent />
//         </div>

//     )
// }

import React, { useState } from 'react';
import navlogo from "../assets/Untitled_logo_1_free-file-removebg-preview.png";
import Headermaincontent from './Headermaincontent';
import MainContent1 from './MainContent1';
import Latestproject from './Latestproject';
import Contact from './Contact';
import Skills from './Skills';
import { useNavigate } from 'react-router-dom';

export default function TailwindNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigate=useNavigate()
    return (
        <>
            <nav className="bg-white border-b border-gray-300 sticky-top">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <img src={navlogo} alt="Logo" className="w-24 h-16" />

                        {/* Hamburger Menu */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 focus:outline-none"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex md:items-center space-x-8">
                            <a href='#'                               
                                className="text-gray-900 font-medium hover:text-violet-600"
                            > Home
                            </a>

                            

                            <a href='#service'
                                className="text-gray-700 hover:text-violet-600"
                            >
                                Services
                            </a>
                            <a href='#about'
                                className="text-gray-700 hover:text-violet-600"
                            >
                                About
                            </a>

                            <a href='#projects'
                                className="text-gray-700 hover:text-violet-600"
                            >
                                Projects
                            </a>

                            <a
                                href="/Resume.pdf"
                                download
                                className="text-gray-700 hover:text-violet-600"
                            >
                                Resume
                            </a>

                            <a href='#contact'
                                className="text-gray-700 hover:text-violet-600"
                            >
                                Contact
                            </a>

                           
                        </div>

                    </div>

                    {/* Mobile Nav Links */}
                    {isOpen && (
                        <div className="md:hidden flex flex-col space-y-2 mt-4 pb-4 border-t pt-4">
                            <a href="#" className="text-gray-900 font-medium hover:text-violet-600">Home</a>
                            <a href="#service" className="text-gray-700 hover:text-violet-600">Services</a>
                            <a href="#about" className="text-gray-700 hover:text-violet-600">About</a>
                            <a href="#projects" className="text-gray-700 hover:text-violet-600">Projects </a>
                            <a href="#Resume" className="text-gray-700 hover:text-violet-600">Resume</a>
                            <a href="#contact" className="text-gray-700 hover:text-violet-600">Contact </a>
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content should be outside the navbar */}
            <Headermaincontent />
            <MainContent1 />
            <Skills/>
            <Latestproject/>
            <Contact/>
        </>
    );
}
