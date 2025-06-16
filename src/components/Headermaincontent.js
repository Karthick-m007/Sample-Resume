import React from 'react';
import img1 from "../assets/home-banner.png";
import "./dummycss.css";

export default function Headermaincontent() {

    return (
        <div className="px-6 sm:px-10 lg:px-16 py-8" id='header'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Text Content */}
                <div className="lg:flex flex-col text-center md:text-left items-center md:items-start">

                    {/* Tilted Hello Box */}
                    <div className="relative w-full mb-5 animate__animated animate__pulse">
                        <span className="bg-white text-purple-600 border-2 border-purple-500 px-3 py-1 text-sm font-semibold rotate-[-30deg] absolute -top-5 left-5  shadow-md ">
                            
                            Hello.
                        </span>
                    </div>

                    {/* Heading */}
                   
                    <h5 className="lg:flex flex-col justify-start mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">     
                        <span className='lg:flex justify-start lg:leading-3 lg:text-3xl md:text-3xl'>Hi, I'm <span className='text-cyan-300 ms-2'>Karthick M</span> </span> <br/>
                        <span className='lg:flex justify-start lg:leading-3 lg:text-3xl md:text-3xl'>Creative    <span className='text-cyan-400 ms-2'> Web Developer</span> </span> <br/>
                        <span className='lg:flex justify-start lg:leading-3 lg:text-3xl md:text-3xl'>Modern & responsive websites.</span>
                    </h5>

                    {/* Paragraph */}
                    <p className="mb-10 mt-6 lg:text-start  sm:text-lg md:text-xl lg:text-2xl max-w-xl">
                        I love designing and developing websites. As a fresher, I am always excited to learn and improve. I focus on making websites that look good and work well on all devices.
                    </p>

                    {/* Button */}
                    <a href='#contact'  className="  mt-14 lg:mt-6 w-fit bg-violet-700 hover:bg-violet-800 px-8 py-2 text-white text-lg md:text-xl rounded-md">
                        Let’s Talk
                    </a>
                </div>

                {/* Image */}
                <div className="flex justify-center mt-8 md:mt-0">
                    <img src={img1} alt="Hero Banner" className="w-full max-w-md md:max-w-lg lg:max-w-xl" />
                </div>
            </div>
        </div>
    );
}
