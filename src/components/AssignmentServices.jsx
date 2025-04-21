import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FaDollarSign, FaHandshake } from 'react-icons/fa6';
import { MdEditNote, MdSchool } from 'react-icons/md'
import Button from './Button';

const data = [
    {
        title: "Quality Writing—No AI",
        description: "Receive fully human-generated, meticulously researched, and precisely written assignments. Our experts hold advanced degrees and bring valuable insights to every project.",
        icon: <MdEditNote size={46} />
    },
    {
        title: "Timely Assistance",
        description: "Worried about an upcoming due date? We work tirelessly to ensure your assignments are completed on time. Rely on our rapid turnaround, even under the tightest schedules.",
        icon: <AiOutlineClockCircle size={46} />
    },
    {
        title: "Learner-Friendly Policies",
        description: "Our student-centric approach features transparent policies and a money-back guarantee. Your peace of mind and satisfaction are our top priorities.",
        icon: <FaHandshake size={46} />
    },
    {
        title: "Reliable Academic Experts",
        description: "Every professional on our platform holds a Master’s or Doctorate. This guarantees well-informed guidance, credible research, and detailed academic materials aligned with your course requirements.",
        icon: <MdSchool size={46} />
    },
    {
        title: "Budget-Conscious Services",
        description: "We adapt our pricing to suit a student’s budget. Benefit from available discounts and special offers, so you can get premier support without overspending.",
        icon: <FaDollarSign size={46} />
    },
    {
        title: "24/7 Availability",
        description: "Have a midnight question or need early-morning clarification? We’re here around the clock. Contact us at any time, and our responsive team will be ready to assist.",
        icon: <BsFillChatDotsFill size={46} />
    },
];


export default function AssignmentServices() {
    return (
        <>
            <section className="bg-surfacev2">
                <div className="max-w-6xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold pl-2 text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
                        Trusted Class Helper: Top Features for Quality Academic Support
                    </h2>
                    <p className="w-[90%] sm:w-[80%] lg:w-[80%] mx-auto text-black text-center">
                        Learn why students worldwide rely on us for expert, tailor-made academic guidance and writing help. Our dedication to authentic work, timely delivery, and learner-focused principles sets us apart.
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

                    {/* <div className="flex justify-center items-center">
                        <Button text="Order Now" />
                    </div> */}
                </div>
            </section>
        </>
    )
}
