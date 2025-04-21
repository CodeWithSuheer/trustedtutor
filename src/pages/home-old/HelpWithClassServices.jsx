import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './Home.css'
import { Link } from 'react-router-dom';
import classes from '../../assets/studyhelpers-assets/images/online-learning.png'
import exams from '../../assets/studyhelpers-assets/images/exam.png'
import assignment from '../../assets/studyhelpers-assets/images/assignment.png'

const HelpWithClassServices = () => {

    const handleMoveToTop = () => window.scroll(0, 0);

    const services = [
        {
            title: "Online Classes",
            description: "Finding your online classes overwhelming? Trusted Class Helper offers flexible, dependable homework support at reasonable rates, along with unlimited revisions. Let us lessen your workload so you can focus on what matters most.",
            link: "/help-with-class",
            image: classes
        },
        {
            title: "Online Exams",
            description: "Exams can be challenging, especially when they're timed or complex. Our law subject experts (and specialists in other fields) provide focused guidance to help you navigate exams confidently and achieve outstanding results.",
            link: "/help-with-exam",
            image: exams
        },
        {
            title: "Online Assignments",
            description: "Our experts thoroughly research and craft your assignments, ensuring relevance, clarity, and originality. Expect well-structured, plagiarism-free submissions that align with high academic standards.",
            link: "/assignments",
            image: assignment
        },
    ];



    return (
        <>
            <section className='bg-white'>
                <div className="max-w-6xl mx-auto py-20">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h3 className="mb-1 font-medium text-md text-purple-700 text-center">Services</h3>
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Further Academic Services</h2>


                    <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-1 lg:gap-8 sm:px-10 px-4">
                        <div className="service_card box_service_shadow border border-button/30 px-5 text-center py-12 rounded-2xl text-black hover:text-white bg-white transition-colors duration-300 hover:bg-surface">
                            <h3 className="mb-3 font-normal text-xl">Your Ultimate Solution for Online Education Success</h3>
                            <p className="text-2xl font-semibold">Get a Guaranteed A+ Grade with the Help of Our Expert Professionals</p>
                        </div>
                    </div>
                    {/* --------------- CONTENT ---------------  */}
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
        </>
    )
}

export default HelpWithClassServices
