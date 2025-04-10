import React from 'react'
import { FaClipboardList, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa"
import img1 from "../../assets/images/process/process1.svg"
import img2 from "../../assets/images/process/process2.svg"
import img3 from "../../assets/images/process/process3.svg"

// NumberCircle Component (unchanged)
const NumberCircle = ({ number, size = "w-14 h-14", textSize = "text-2xl", positionClasses = "-top-6 left-1/2 -translate-x-1/2 md:-left-5 md:-translate-x-0" }) => {
    return (
        <div className={`absolute ${positionClasses} ${size} rounded-full bg-[#F87727] flex items-center justify-center text-white ${textSize} font-bold`}>
            {number}
        </div>
    );
};

// New reusable ProcessCard Component
const ProcessCard = ({ number, icon: Icon, imgSrc, title, description }) => {
    return (
        <div className="relative flex-1 flex flex-col items-center custom-shadow mb-5 sm:mb-0 rounded-xl">
            <NumberCircle number={number} />
            <div className="w-full h-full bg-white px-4 py-6 sm:px-6 sm:py-7 pt-10 shadow-sm rounded-sm flex flex-col items-center text-center">
                <div className="text-orange-500 mb-4">
                    <img src={imgSrc} alt="image" className='size-20' />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 px-0 sm:px-7">{title}</h3>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
        </div>
    );
};

const HomeProcess = () => {
    return (
        <>
            <section className="bg-accent w-full">
                <div className="max-w-7xl mx-auto py-16 pb-4 sm:pb-14 px-4 sm:px-0">
                    {/* Header Text (unchanged) */}
                    <h2 className="mb-3 font-bold  text-3xl md:text-4xl mx-auto text-dark text-center">
                        How Our Simple Process Works
                    </h2>
                    <p className="w-full mx-auto text-dark text-center text-sm sm:text-[16px]">
                        With our easy three-step process, receiving professional academic support is quicker and simpler than ever. Here's how we consistently deliver outstanding
                        results to our clients. Connect with us today and start improving your academic performance right away!
                    </p>

                    <div className="mt-6 w-full py-12 px-4">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
                            {/* Using ProcessCard components */}
                            <ProcessCard
                                number="1"
                                icon={FaClipboardList}
                                imgSrc={img1}
                                title="Share Your Academic Details"
                                description="Share the details of your academic challenges with our friendly support team through Live Chat."
                            />

                            <div className="hidden md:block w-20 h-1 bg-[#F87727] self-center"></div>

                            <ProcessCard
                                number="2"
                                icon={FaMoneyBillWave}
                                imgSrc={img2}
                                title="Get a Personalized Quote"
                                description="We'll carefully review your information and provide you with a best affordable, price quote tailored to your needs."
                            />

                            <div className="hidden md:block w-16 h-1 bg-[#F87727] self-center"></div>

                            <ProcessCard
                                number="3"
                                icon={FaCheckCircle}
                                imgSrc={img3}
                                title="Receive Expert Assistance"
                                description="Our Subject Professional will work closely with you to address your needs and deliver the best that sets you up for success."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeProcess