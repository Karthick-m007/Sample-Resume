import React, { useState, useRef } from 'react';
import { MdLocalPostOffice } from "react-icons/md";
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import contactimg from "../assets/contact.svg";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const [formData, setFormData] = useState({
        firstName: '',
        mailId: '',
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
        if (!formData.mailId.trim()) newErrors.mailId = 'Last name is required';
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
                    setFormData({ firstName: '', mailId: '', subject: '', message: '' });
                    setErrors({});
                },
                (error) => {
                    console.error('EmailJS error:', error.text);
                    alert('Failed to send. Please try again later.');
                }
            );
    };

    return (
        <div className="bg-shade-yellow scroll-mt-24" id="contact">
            <div className="relative w-full">
                <span className="mt-16 lg:mt-12 mb-5 bg-white text-purple-600 border-2 border-purple-500 px-3 py-1 text-sm font-semibold rotate-[-30deg] absolute -top-5 left-5 shadow-md">
                    Contact.
                </span>
            </div>

            <h1 className="flex justify-center pt-24 pb-3 text-3xl font-bold">Let's Discuss Project</h1>

            <div className="p-3 ms-4 sm:ms-3 lg:ms-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contact Form */}
                <div className="p-5 w-full sm:w-[90%] md:w-[80%] lg:w-full border border-black lg:py-10 lg:px-24 mx-auto rounded bg-white mb-5">
                    <h2 className="my-4 text-3xl font-bold">Get in touch</h2>
                    <p className="py-2 text-xl">Our friendly team would love to hear from you.</p>

                    <form ref={form} onSubmit={handleSubmit}>
                        
                            <div className="flex flex-col my-3">
                                <label className="mb-2 text-xl">First Name:</label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="border border-black w-full h-10 p-2"
                                    placeholder="First Name *"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>
                        

                        <div className="flex flex-col my-3">
                            <label className="mb-2 text-xl">Subject:</label>
                            <input
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="border border-black w-full h-10 p-2"
                                placeholder="Subject *"
                            />
                            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                        </div>

                        <div className="flex flex-col my-3">
                            <label className="mb-2 text-xl">Your Mail Id:</label>
                            <input
                                name="mailId"
                                value={formData.mailId}
                                onChange={handleChange}
                                className="border border-black w-full h-10 p-2"
                                placeholder="MailId *"
                            />
                            {errors.mailId && <p className="text-red-500 text-sm">{errors.mailId}</p>}
                        </div>

                        <div className="flex flex-col my-3">
                            <label className="mb-2 text-xl">Your message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="border border-black w-full h-36 p-2"
                                placeholder="Your Message *"
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        <button type="submit" className="mt-3 text-lg bg-shade-yellow-1 p-2 px-4 rounded">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="lg:ms-8 lg:my-auto sm:ms-8 mx-auto md:ms-8 md:mx-auto">
                    {/* Phone */}
                    <div className="grid grid-cols-[auto,1fr] items-center gap-x-4 sm:ms-8 lg:ms-32 mb-4">
                        <div className="text-3xl rounded-full bg-violet1 text-white p-3 w-16">
                            <FaSquarePhone />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold">Phone</h3>
                            <p>8610772856</p>
                        </div>
                    </div>
                    <hr className="w-full max-w-md my-3" />

                    {/* Mail */}
                    <div className="grid grid-cols-[auto,1fr] items-center gap-x-4 sm:ms-8 lg:ms-32 mb-4">
                        <div className="text-3xl rounded-full bg-violet1 text-white p-3 w-16">
                            <MdLocalPostOffice />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold">Mail</h3>
                            <p>karthickraja200211@gmail.com</p>
                        </div>
                    </div>
                    <hr className="w-full max-w-md my-3" />

                    {/* Address */}
                    <div className="grid grid-cols-[auto,1fr] items-center gap-x-4 sm:ms-8 lg:ms-32 mb-4">
                        <div className="text-3xl rounded-full bg-violet1 text-white p-3 w-16">
                            <FaLocationDot />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold">Address</h3>
                            <p className="w-full max-w-xs text-lg">
                                95, near Sakthi Mandapam Street,<br />
                                Perundurai.
                            </p>
                        </div>
                    </div>

                    <img src={contactimg} alt="" className="mt-5 mx-auto w-full max-w-xs lg:max-w-sm" />
                </div>
            </div>
        </div>
      
          
            
  
        
    );
}
