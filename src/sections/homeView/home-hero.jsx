import React from 'react'
import './home.css'
import Button from '../../components/buttons/button'
import EmailFormForHome from '../../components/EmailFormForHome'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoChatbox } from 'react-icons/io5'
import ButtonSq from '../../components/buttons/buttonSq'
import ButtonIcon from '../../components/buttons/buttonIcon'

const HomeHero = () => {
    const pointsData = [
        "Pocket-Friendly Pricing",
        "100% Customer Satisfaction",
        "On-Time Assistance Guarantee",
        "24/7 Customer Support",
        "50+ Subjects Covered",
        "7+ Years of Experience"
    ];

    return (
        <>
            <section className="text-white home_backgroundImage mb-0 lg:mb-0">
                <div className="max-w-7xl mx-auto md:px-10 pt-16 pb-10 flex justify-center items-center min-h-[95vh] relative z-10">
                    <div className="flex flex-col lg:flex-row justify-center items-center">

                        {/* CONTENT */}
                        <div className="px-4 sm:px-5 lg:flex-grow lg:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
                            <h2 className="text-lg sm:text-2xl font-medium mb-2">
                                Tired of Online Class Stress?
                            </h2>
                            <h2 className="text-3xl sm:text-4xl tracking-wide font-bold mb-5">
                                Qualified Professionals Are Here to Support You Through Every <span className='text-[#F87727]'>Online Class</span>.
                            </h2>

                            {pointsData?.map((data, index) => (
                                <div key={index} className="flex gap-x-2 sm:gap-x-3 justify-start items-center">
                                    <span className="icon text-orange-500">
                                        <FaCircleCheck />
                                    </span>
                                    <p className='text-md sm:text-lg font-medium tracking-wide'>{data}</p>
                                </div>
                            ))}

                            <div className="mt-6 flex justify-start flex-col w-full sm:flex-row gap-y-3 gap-x-3">
                                <ButtonIcon text="Order Now " />

                                <button
                                    onClick={() => { Tawk_API.toggle(); }}
                                    className='relative bg-light text-[#F77927] text-center rounded-3xl px-5 py-2.5 flex justify-center items-center gap-2 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 ease-in-out cursor-pointer'
                                >
                                    <IoChatbox size={20} />  Live Chat
                                </button>
                            </div>
                        </div>

                        {/* EMAIL FORM */}
                        <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
                            <EmailFormForHome />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeHero
