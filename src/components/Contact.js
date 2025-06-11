import React, { useState, useRef } from 'react';
import { MdLocalPostOffice } from "react-icons/md";
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import contactimg from "../assets/contact.svg";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setErrors(prev => ({
            ...prev,
            [e.target.name]: '',
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Only send once validation passes
        emailjs
            .sendForm(
                'service_d5rlmc7',    // your service ID
                'template_44ku41r',   // your template ID
                form.current,         // the form ref
                'dmVaVG3KbbIGD0HTa'   // your public key
            )
            .then(
                () => {
                    alert('Form submitted successfully!');
                    setFormData({ firstName: '', lastName: '', subject: '', message: '' });
                    setErrors({});
                },
                (error) => {
                    console.error('EmailJS error:', error.text);
                    alert('Failed to send. Please try again later.');
                }
            );
    };

    return (
        <div className='bg-shade-yellow scroll-mt-24' id='contact'>
            <div className="relative w-full">
                <span className="mt-16 lg:mt-12 mb-5 bg-white text-purple-600 border-2 border-purple-500 px-3 py-1 text-sm font-semibold rotate-[-30deg] absolute -top-5 left-5 shadow-md">
                    Contact.
                </span>
            </div>

            <h1 className='flex justify-center pt-24 pb-3 text-3xl font-bold'>Let's Discuss Project</h1>

            <div className='p-3 lg:ms-5 lg:grid grid-cols-2 gap-2'>
                {/* Contact Form */}
                <div className='p-5 lg:w-100 border border-black lg:py-10 lg:px-24 mx-auto rounded bg-white mb-5'>
                    <h2 className='my-4 text-3xl font-bold'>Get in touch</h2>
                    <p className='py-2 text-xl'>Our friendly team would love to hear from you.</p>

                    <form ref={form} onSubmit={handleSubmit}>
                        <div className='lg:grid grid-cols-2 w-96 my-3'>
                            <div className='flex flex-column'>
                                <label className='mb-2 text-xl'>First name</label>
                                <input
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className='border border-black w-64 lg:w-44 h-8 p-2'
                                    placeholder='First *'
                                />
                                {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                            </div>

                            <div className='flex flex-column lg:ms-3 md:my-auto'>
                                <label className='mb-2 text-xl'>Last name</label>
                                <input
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className='border border-black w-64 lg:w-44 h-8 p-2'
                                    placeholder='Last *'
                                />
                                {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName}</p>}
                            </div>
                        </div>

                        <span className='flex flex-column my-3'>
                            <label className='mb-2 text-xl'>Subject</label>
                            <input
                                name='subject'
                                value={formData.subject}
                                onChange={handleChange}
                                className='border border-black w-64 lg:w-96 h-8 p-2'
                                placeholder='Subject *'
                            />
                            {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                        </span>

                        <span className='flex flex-column my-3'>
                            <label className='mb-2 text-xl'>Your message</label>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                className='border border-black w-64 lg:w-96 h-36 p-2'
                                placeholder='Your Message *'
                            />
                            {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                        </span>

                        <button type='submit' className='lg:mt-3 text-lg bg-shade-yellow-1 p-2 px-3 rounded'>
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className='lg:ms-8 lg:my-auto'>
                    <div className='grid grid-cols-2 ms-4 lg:ms-32 w-20 mb-4'>
                        <div className='my-auto text-3xl rounded-full bg-violet1 text-white p-3 w-16'>
                            <FaSquarePhone />
                        </div>
                        <div className='ms-16 my-2'>
                            <h3 className='leading-10 text-2xl'>Phone</h3>
                            <p>1234569870</p>
                        </div>
                        <hr className='w-80 lg:w-96 mt-3' />
                    </div>

                    <div className='grid grid-cols-2 ms-4 lg:ms-32 w-20 mb-4'>
                        <div className='my-auto text-3xl rounded-full bg-violet1 text-white p-3 w-16'>
                            <MdLocalPostOffice />
                        </div>
                        <div className='ms-16 my-2'>
                            <h3 className='leading-10 text-2xl'>Mail</h3>
                            <p>dasss@gmail.com</p>
                        </div>
                        <hr className='w-80 lg:w-96 mt-3' />
                    </div>

                    <div className='grid grid-cols-2 ms-4 lg:ms-32 w-20 mb-4'>
                        <div className='my-auto text-3xl rounded-full bg-violet1 text-white p-3 w-16'>
                            <FaLocationDot />
                        </div>
                        <div className='ms-16 my-2'>
                            <h3 className='leading-10 text-xl lg:text-2xl'>Address</h3>
                            <p className='w-52 text-lg lg:w-72'>
                                Warnwe Park Streetperrine, FL 33157 New York City
                            </p>
                        </div>
                        <hr className='w-80 lg:w-96 mt-3' />
                    </div>

                    <img src={contactimg} alt='' className='mt-5 mx-auto' />
                </div>
            </div>

            <h2 className='flex justify-center py-6'>&copy; Made By Karthick ❤️</h2>
        </div>
    );
}
