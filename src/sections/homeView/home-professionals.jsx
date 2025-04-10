import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import img2 from "../../assets/images/prof/professional2.svg"
import img3 from "../../assets/images/prof/professional3.svg"
import img4 from "../../assets/images/prof/professional4.svg"
import img5 from "../../assets/images/prof/professional5.svg"
import img6 from "../../assets/images/prof/professional6.svg"
import Button from '../../components/buttons/button';

const HomeProfessionals = () => {

    const services = [
        {
            title: "Ph.D.-Qualified Subject Experts",
            description: "Your academic success is our priority. That's why our team includes experienced professionals with advanced degrees, ensuring expert guidance tailored specifically to your course requirements.",
            link: "/help-with-class",
            image: img2
        },
        {
            title: "Outstanding Academic Results",
            description: "With the academic specialists handling your coursework, expect nothing less than top grades. We strive to deliver high-quality, custom-crafted assignments and exceptional outcomes every time.",
            link: "/help-with-class",
            image: img2
        },
        {
            title: "100% Confidentiality & Security",
            description: "We prioritize your privacy and never share your personal or coursework details. Rest assured, your identity is completely protected with our secure confidentiality policies.",
            link: "/help-with-class",
            image: img3
        },
        {
            title: "Affordable, Competitive Pricing",
            description: "We believe exceptional academic support should be accessible. Our services are reasonably priced, offering special discounts to ensure you receive superior quality without stretching your budget.",
            link: "/help-with-class",
            image: img4
        },
        {
            title: "Timely Delivery Every Time",
            description: "Worried about tight deadlines? Our experts deliver prompt and reliable results, ensuring your tasks are completed exactly when you need them.",
            link: "/help-with-class",
            image: img5
        },
        {
            title: "24/7 Customer Support",
            description: "Have questions or need help urgently? Our dedicated support team is available 24/7 to assist you immediately—day or night.",
            link: "/help-with-class",
            image: img6
        }
    ];



    return (
        <>
            <section className='w-full'>
                <div className="max-w-7xl mx-auto pt-14 pb-14 px-3 sm:px-0">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold  text-3xl md:text-4xl mx-auto text-dark text-center">
                        A Team Of PHDs <span className='text-primary-one'>Professionals </span> Trusted By <span className='text-primary-one'>USA Students</span>
                    </h2>

                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4">
                        {services.map((service, index) => (
                            <div key={index} className="service_card group box_shadow px-6 py-6 rounded-2xl bg-white border border-primary-one text-center">
                                <div className="mb-1 logo size-20 p-2 rounded-xl mx-auto flex justify-center items-center">
                                    <img src={service?.image} alt={service?.title} />
                                </div>
                                <h3 className="mb-2 font-semibold text-xl text-primary-one">{service?.title}</h3>
                                <p className="text-sm leading-6 font-normal text-dark">{service?.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center items-center">
                        <Button text="Order Now" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeProfessionals
