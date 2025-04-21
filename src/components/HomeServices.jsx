import React from 'react'
import Button from './Button';

// icons
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa6';
import { MdEditNote, MdOutlineSecurity } from 'react-icons/md'
import { HiMiniAcademicCap } from 'react-icons/hi2';

const data = [
    {
        title: "Expert Academic Professionals",
        description: "Our team comprises specialists with advanced degrees and extensive field experience. They understand your course needs and provide in-depth, reliable solutions—no shortcuts or generic approaches.",
        icon: <HiMiniAcademicCap size={46} />
    },
    {
        title: "Privacy & Security Assured",
        description: "We protect your personal information and coursework details to create a secure environment for seeking academic guidance. Experience authentic support delivered on time, guided by student-focused values.",
        icon: <MdOutlineSecurity size={44} />
    },
    {
        title: "Quality Writing—No AI",
        description: "Expect entirely human-generated, thoroughly researched, and carefully composed assignments. Our team members hold advanced academic qualifications, offering valuable insights and expertise.",
        icon: <MdEditNote size={46} />
    },
    {
        title: "Timely Assistance",
        description: "Concerned about approaching deadlines? We're here to ensure your tasks are completed on schedule. Rely on us for quick turnarounds and timely submission, even when deadlines loom.",
        icon: <AiOutlineClockCircle size={46} />
    },
    {
        title: "Budget-Conscious Services",
        description: "We understand student budgets. Our pricing structure is flexible and includes special discounts, so you can access top-level academic support without breaking the bank.",
        icon: <FaDollarSign size={46} />
    },
    {
        title: "24/7 Availability",
        description: "Whether it's midnight or early morning, our team is on standby. Feel free to reach out anytime; our responsive staff is ready to assist.",
        icon: <BsFillChatDotsFill size={46} />
    },
];


export default function HomeAssignmentServices() {
    return (
        <>
            <section className="bg-[#F4F8FE]">
                <div className="max-w-6xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold pl-2 text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
                        Trusted Class Helper: Top Features for Quality Academic Support
                    </h2>
                    <p className="w-[90%] sm:w-[80%] lg:w-[80%] mx-auto text-black text-center">
                        Discover why students around the world rely on us for expert, customized academic guidance and writing assistance. Our unwavering commitment to authenticity, punctual delivery, and learner-centered policies sets us apart.
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8 my-10 sm:my-12">
                        {data?.map((data) => (
                            <div className="w-full p-4 flex justify-start gap-x-3">
                                <div className="icon text-purple-800">
                                    {data?.icon}
                                </div>
                                <div className="content">
                                    <h3 className="text-xl font-medium">
                                        {data?.title}
                                    </h3>
                                    <p className="mt-2 text-gray-700 text-sm leading-normal">
                                        {data?.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center">
                        <Button text="Order Now" />
                    </div>
                </div>
            </section>
        </>
    )
}
