import React from 'react';
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { LuTriangle } from "react-icons/lu";
import { SiAffinitydesigner } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MainContent1() {
    const content = [
        {
            id: 1,
            course: "Web Design",
            description: "I create clean and modern website layouts that are user-friendly and visually appealing. My focus is on responsive design that works on all devices.",
            icons: <MdOutlinePhoneIphone />
        },
        {
            id: 2,
            course: "Front-End Development",
            description: "I build interactive and functional websites using HTML, CSS, JavaScript, and React. I aim to write clean code and bring designs to life.",
            icons: <FaLaptop />
        },
        {
            id: 3,
            course: "Tailwind CSS",
            description: "I use Tailwind CSS to quickly create custom, modern UIs with utility-first classes and responsive design built-in.",
            icons: <LuTriangle />
        },
        {
            id: 4,
            course: "React Development",
            description: "I use React JS to build dynamic and fast web apps with reusable components and clean state management.",
            icons: <SiAffinitydesigner />
        },
        {
            id: 5,
            course: "Responsive Design",
            description: "I make websites look great on all screen sizes — from mobile phones to desktops — using flexible layouts and modern CSS frameworks.",
            icons: <FaConnectdevelop />
        },
    ];

    return (
        <div id='service' className='scroll-mt-24'>
            <div className='bg-shade-yellow my-4 pt-16 pb-20'>
                <div className="relative w-full ms-8">
                    <span className="bg-white text-purple-600 border-2 border-purple-500 px-3 py-1 text-sm font-semibold rotate-[-30deg] absolute -top-5 left-5 shadow-md">
                        Services.
                    </span>
                </div>

                <h1 className='flex justify-center py-6 text-3xl lg:justify-start lg:ms-12 mt-5 mb-4 lg:text-5xl'>
                    Services I Offer
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ms-6 me-6'>
                    {content.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className='reveal-card border lg:h-100 p-8 shadow-md border-black bg-white mb-5 box1'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className='leading-10'>
                                <h1 className="text-5xl mb-4 font-bold">0{item.id}</h1>
                                <h2 className="text-2xl font-semibold">{item.course}</h2>
                            </div>
                            <p className="mt-4 text-gray-700">{item.description}</p>
                            <p className='text-3xl w-16 p-3 mt-8 rounded-full bg-shade-yellow-1 lg:mt-6 lg:mb-6'>
                                {item.icons}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
