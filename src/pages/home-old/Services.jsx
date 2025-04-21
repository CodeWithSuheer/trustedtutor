import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import './Home.css';
import { Link } from 'react-router-dom';
import classes from '../../assets/studyhelpers-assets/images/online-learning.png'
import exams from '../../assets/studyhelpers-assets/images/exam.png'
import assignment from '../../assets/studyhelpers-assets/images/assignment.png'

const Services = () => {
    const handleMoveToTop = () => window.scroll(0, 0);

    const services = [
        {
            title: "Online Class Help",
            description: "Our online class support service is structured to offer you the help you need to do well in your coursework. If you're finding it hard to stay on track with your online classes or could use some extra assistance to stand out in your studies, our experienced tutors and academic experts are ready to aid you.",
            link: "/help-with-class",
            image: classes
        },
        {
            title: "Online Exam Help",
            description: "Feeling overwhelmed with studying for a significant exam? Let our online exam help guide you in the right direction towards success! Our team of knowledgeable experts can help you grasp important concepts, create solid study techniques, and ace practice exams to ensure you're fully prepared.",
            link: "/help-with-exam",
            image: exams
        },
        {
            title: "Online Assignment Help",
            description: "Completing assignments can be a daunting task, especially when you're juggling multiple deadlines and competing demands on your time. That's where our assignment aid service comes in. Our team of experienced tutors and academic experts is here to provide you with the assistance you need to succeed in your coursework.",
            link: "/assignments",
            image: assignment
        },
    ];

    return (
        <section className='bg-white'>
            <div className="max-w-6xl mx-auto py-20">
                <h3 className="mb-1 font-medium text-md text-[#945EB3] text-center">Services</h3>
                <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Our Top-Rated Services</h2>

                <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4">
                    {services.map((service, index) => (
                        <div key={index} className="service_card group box_shadow px-6 py-6 rounded-2xl bg-white transition-colors duration-300 hover:bg-surface">
                            <div className="mb-3 logo w-14 h-14 p-2 rounded-xl bg-lightSurface">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <h3 className="mb-2 font-medium text-xl text-[#945EB3] group-hover:text-white">{service.title}</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">{service.description}</p>
                            <Link to={service.link} onClick={handleMoveToTop} className='flex items-center gap-2 text-md font-semibold text-[#945EB3] group-hover:text-white'>
                                Order Now <FaArrowRightLong size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
