import React from 'react';
import { FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";


import image from "../assets/avatar.png";
import { motion } from "framer-motion";

export default function Skills() {
    const fadeUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div id='about' className='scroll-mt-24'>

            <motion.div
                className='lg:grid grid-cols-2 ms-16 me-16 gap-3'
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
            >
                {/* Left Side */}
                <motion.div className='mt-3' {...fadeUp}>
                    <h1 className='mt-2 mb-3 text-4xl font-bold'>Skills</h1>
                    <p className='my-3 text-xl'>
                        I am a beginner web developer with a strong interest in creating websites...
                    </p>
                    <h2 className='my-3 text-2xl font-bold mb-4'>Technical Skills</h2>

                    <div className='lg:grid grid-cols-2'>
                        {/* Left Column Skills */}
                        <div className='grid gap-3 justify-center lg:mt-3'>
                            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                            {[
                                { icon: <FaHtml5 />, label: "HTML" },
                                { icon: <FaCss3Alt />, label: "CSS" },
                                { icon: <IoLogoJavascript />, label: "JavaScript" },
                                { icon: <FaNodeJs />, label: "Node.js" }
                            ].map((skill, i) => (
                                <motion.div
                                    key={i}
                                    className='flex items-center border w-56 lg:w-48 lg:h-14 p-3 border-black box3 rounded-xl shadow-md bg-white hover:scale-105 transition-transform duration-200'
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <h3 className='text-3xl text-white bg-violet1 rounded-full p-2'>{skill.icon}</h3>
                                    <h1 className='ms-3 font-medium'>{skill.label}</h1>
                                </motion.div>
                            ))}
                        </div>


                        {/* Right Column Skills */}
                        <div className='grid gap-3 justify-center lg:mt-3'>
                            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                            {[
                                { icon: <FaReact />, label: "React" },
                                { icon: <FaBootstrap />, label: "Bootstrap" },
                                { icon: <RiTailwindCssFill />, label: "Tailwind" },
                               
                            ].map((skill, i) => (
                                <motion.div
                                    key={i}
                                    className='flex items-center border w-56 lg:w-48 lg:h-14 p-3 border-black box3 rounded-xl shadow-md bg-white hover:scale-105 transition-transform duration-200'
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <h3 className='text-3xl text-white bg-violet1 rounded-full p-2'>{skill.icon}</h3>
                                    <h1 className='ms-3 font-medium'>{skill.label}</h1>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="/Resume.pdf"
                            download
                            className="bg-yellow-500 text-white px-4 py-2 rounded md:w-48 md:mx-auto sm:w-48 sm:mx-auto w-48 mx-auto md:text-center lg:mt-24 lg:text-nowrap lg:ms-10 mt-8 ms-10 me-10 flex"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Side – Academic Journey */}
                <motion.div {...fadeUp}>
                    <h1 className='mt-14 flex justify-center lg:mt-3 text-3xl font-bold mb-3'>Academic Journey</h1>
                    <hr />
                    {[
                        {
                            year: "2019 - 2023",
                            degree: "BE-EEE",
                            score: "CGPA - 85%",
                            college: "Velalar Engineering College of Technology"
                        },
                        {
                            year: "2017 - 2019",
                            degree: "HSC",
                            score: "69%",
                            college: "Kongu Vellalar Matric. Hr. Sec. School"
                        },
                        {
                            year: "2016 - 2017",
                            degree: "SSLC",
                            score: "85%",
                            college: "Kongu Vellalar Matric. Hr. Sec. School"
                        }
                    ].map((edu, i) => (
                        <motion.div key={i} className='grid grid-cols-2 my-2' {...fadeUp} transition={{ delay: i * 0.2 }}>
                            <h1 className='font-bold'>{edu.year}</h1>
                            <span className='leading-7 ms-4'>
                                <h1 className='my-2'>{edu.degree}</h1>
                                <h4>{edu.score}</h4>
                                <p>{edu.college}</p>
                            </span>
                            <hr />
                        </motion.div>
                    ))}

                    <hr className='w-100 mt-2' />

                    <span className='flex justify-center mt-10'>
                        <motion.img
                            src={image}
                            alt=""
                            className='rounded-full bg-gray-400 w-28'
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </span>

                    <span className='flex justify-center'>
                        <motion.a
                            href='#contact'
                            className='mt-8 py-1 px-2 rounded bg-shade-yellow-1'
                            whileHover={{ scale: 1.1 }}
                        >
                            Hire Me
                        </motion.a>
                    </span>
                </motion.div>
            </motion.div>
        </div>
    );
}
