import React from 'react'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { LuTriangle } from "react-icons/lu";
import { SiAffinitydesigner } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";



export default function MainContent1() {

    const content = [{
        id: 1,
        course: "Web Design",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis similique harum praesentium quo possimus, consectetur dicta natus saepe dolorem.",
        icons: <MdOutlinePhoneIphone />

    },
    {
        id: 2,
        course: "Developer",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis similique harum praesentium quo possimus, consectetur dicta natus saepe dolorem.",
        icons: < FaLaptop />
    },

    {
        id: 3,
        course: "ui/ux",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis similique harum praesentium quo possimus, consectetur dicta natus saepe dolorem.",
        icons: <LuTriangle />

    },
    {
        id: 4,
        course: "ui/ux",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis similique harum praesentium quo possimus, consectetur dicta natus saepe dolorem.", icons: <SiAffinitydesigner />

    }, {
        id: 5,
        course: "ui/ux",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis similique harum praesentium quo possimus, consectetur dicta natus saepe dolorem.", icons: <FaConnectdevelop />

    },
    {
        id: 6,
        course: "ui/ux",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis similique harum praesentium quo possimus, consectetur dicta natus saepe dolorem.", icons: <TbWorld />

    }
    ]



    return (
        <div id='service' className='scroll-mt-24'>

            <div className=' bg-shade-yellow my-4 pt-16 pb-20 '>
                <div className="relative w-full">
                    <span className="bg-white text-purple-600 border-2 border-purple-500 px-3 py-1 text-sm font-semibold rotate-[-30deg] absolute -top-5 left-5  shadow-md">
                        Services.
                    </span>
                </div>

                <h1 className='flex justify-center py-6 text-3xl  lg:justify-start lg:ms-12 mt-5 mb-4 lg:text-5xl'>Services I Offer</h1>
                <div className='lg:grid grid-cols-3 gap-6 ms-6 me-6 flex-wrap justify-center'>
                    {content.map((content) => (
                        <div key={content.id} className='border lg:h-100 p-8  shadow-md  border-black bg-white mb-5  box1  ' >

                            <div className='leading-10 ' >
                                <h1 className="text-5xl mb-4 font-bold">0{content.id}</h1>
                                <h2 className="text-2xl font-semibold">{content.course}</h2>

                            </div>
                            <p className="mt-4 text-gray-700">{content.description}</p>
                            <p className='text-3xl   w-16  p-3 mt-8  rounded-full  bg-shade-yellow-1 lg:mt-6 lg:mb-6 '>{content.icons}</p>


                        </div>
                    ))}
                </div>

            </div>

            {/* <div className='flex'>
                <div className='border w-96 h-80 p-5 '>
                    <div className='leading-10'>
                        <h1>01</h1>
                        <h2>Web Design</h2>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis similique harum praesentium quo possimus, consectetur dicta natus saepe dolorem.</p>
                </div>
                <div className='border w-96 h-80 p-5 '>
                    <div className='leading-10'>
                        <h1>01</h1>
                        <h2>Web Design</h2>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis similique harum praesentium quo possimus, consectetur dicta natus saepe dolorem.</p>
                </div>
            </div> */}
        </div>
    )
}
