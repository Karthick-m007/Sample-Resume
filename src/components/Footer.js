import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";




export const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center text-primary-content p-10">
        <aside className=' flex flex-col items-center'>
          
          <p className="font-bold text-2xl leading-10">
           Sample-Resume
          </p>
          <p className='my-2'>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="flex justify-center mt-3 gap-4">
            <a className='text-3xl' href='https://www.linkedin.com/in/m-karthick-b18914245/'>
              <CiLinkedin />
            </a>
            <a href='https://github.com/Karthick-m007' className='text-3xl'>

              <FaGithub />
            </a>
            <a className='text-3xl'>
              <IoIosMail />

            </a>
          </div>
        </nav>
      </footer>
    </div>
  )
}
