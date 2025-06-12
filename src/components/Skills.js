import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import image from "../assets/avatar.png"





export default function Skills() {
    return (


        <div id='about' className='scroll-mt-24'>

            <div className='lg:grid grid-cols-2 ms-16 me-16 gap-3'>
                <div className='mt-3'>
                    <h1 className='mt-2 mb-3 text-4xl font-bold'>
                        Skills                       
                    </h1>

                    <p className='my-3 text-xl'>I am a beginner web developer with a strong interest in creating websites. I enjoy learning new things and building simple, clean, and responsive web pages. I am looking forward to growing my skills and working on real-world projects.</p>

                    <h2 className='my-3 text-2xl font-bold mb-4'>Technical Skills </h2>

                    <div className='lg:grid grid-cols-2   '>
                        <div className='grid gap-3 justify-center lg:mt-3 '>

                            <div className='flex items-center border w-56 lg:w-48 lg:h-14 p-3  border-black box3 '>
                                <h3 className='text-4xl text-white bg-violet1 rounded-full'>
                                    <FaHtml5 />
                                </h3>
                                <h1 className='ms-3 '>HTML</h1>
                            </div>

                            <div className='flex items-center border w-56 lg:w-48 lg:h-14 p-3 border-black  box3'>
                                <h3 className='text-4xl  text-white bg-violet1 rounded-full'>
                                    <FaCss3Alt />

                                </h3>
                                <h1 className='ms-3'>CSS</h1>
                            </div>

                            <div className='flex items-center border w-56 lg:w-48 lg:h-14 p-3 border-black box3'>
                                <h3 className='text-3xl  text-white bg-violet1 rounded-full'>
                                    <IoLogoJavascript />
                                </h3>
                                <h1 className='ms-3 '>JAVA SCRIPT</h1>
                            </div>

                        </div>

                        <div className='grid gap-3 justify-center mt-3'>
                            <div className='flex items-center border  w-56 lg:w-48 lg:h-14  p-3 border-black box3 '>
                                <h3 className='text-3xl  text-white bg-violet1 rounded-full'>
                                    <FaReact />
                                </h3>
                                <h1 className='ms-3'>REACT</h1>
                            </div>


                            <div className='flex items-center border  w-56 lg:w-48 lg:h-14  p-3 border-black box3 '>
                                <h3 className='text-3xl  text-white bg-violet1 rounded-full'>
                                    <FaBootstrap />

                                </h3>
                                <h1 className='ms-3'>BOOTSTRAP</h1>
                            </div>

                            <div className='flex items-center border w-56 lg:w-48 lg:h-14  p-3 border-black box3 '>
                                <h3 className='text-3xl  text-white bg-violet1 rounded-full'>
                                    <RiTailwindCssFill />
                                </h3>
                                <h1 className='ms-3'>TAILWIND</h1>
                            </div>
                           

                        </div>
                        <a
                            
                            href="/Resume.pdf"
                            download
                            className="bg-yellow-500 text-white px-4 py-2 rounded mt-24 mx-auto ms-20"
                        >
                            Download Resume
                        </a>    
                    </div>
                    

                </div>

                <div>
                    <h1 className=' mt-4 flex justify-center lg:mt-3  text-3xl font-bold mb-3'>Academic Journey</h1>
                    <hr />
                    <div className='grid grid-cols-2 my-2'>
                    <h1 className='font-bold'>2019 -2023</h1>
                        <span className='leading-7'>
                            <h1 className='my-2'>BE-EEE</h1>
                            <h4>CGPA - 85%</h4>
                            <p>Velalar Engineering College of Technology </p>
                            </span>
                    </div>
                    <hr />
                    <div className='grid grid-cols-2 my-2'>
                        <h1 className='font-bold'>2017 -2019</h1>
                        <span className='leading-7'>
                            <h1 className='my-2'>HSC</h1>
                            <h4> 69%</h4>
                            <p>Kongu Vellalar Matriculation Higher Secondary School </p>
                        </span>
                    </div>

                    <hr />
                    <div className='grid grid-cols-2 my-2'>
                        <h1 className='font-bold'>2016 -2017</h1>
                        <span className='leading-7'>
                            <h1 className='my-2'>SSLC</h1>
                            <h4> 85%</h4>
                            <p>Kongu Vellalar Matriculation Higher Secondary School </p>

                            
                        </span>
                        
                    </div>
                    <hr className='w-100 mt-2' />
                        
                   <span className='flex justify-center mt-10'>
                        <img src={image} alt="" className='rounded-full bg-gray-400 w-28' />
                        
                   </span>
                   <span className='flex justify-center'>
                        <a href='#contact'
                         className=' mt-8 py-1 px-2 rounded bg-shade-yellow-1'>Hire Me</a>
                   </span>
                        
                </div>
                



            </div>




        </div>
    )
}
