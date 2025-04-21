import React from 'react'
import image01 from '../assets/studyhelpers-assets/helpWithClass/calendar.png'
import image02 from '../assets/studyhelpers-assets/helpWithClass/running-man.png'
import image03 from '../assets/studyhelpers-assets/helpWithClass/save-time.png'
import image04 from '../assets/studyhelpers-assets/helpWithClass/traffic-signal.png'

const WhyChooseUsForHelpWithClass = () => {
    return (
        <>
            <section className='bg-[#F4F8FE]'>
                <div className="max-w-5xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold pl-2 text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-start sm:text-center">Why Choose Us</h2>
                    <p className='w-[90%] sm:w-[80%] lg:w-[65%] mx-auto text-black text-start sm:text-center'>We're able to meet the standards of all universities and schools.</p>


                    <div className="flex flex-wrap my-10 sm:my-12">


                        <div className="w-full border-b md:w-1/2 md:border-r border-button lg:w-1/2 px-4 py-5 sm:px-8 sm:py-8">
                            <img className='w-12' src={image04} alt="" />
                            <h3 className="mt-2 text-xl">Least Interest in Studies</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-normal">
                                Feeling uninterested in a particular subject or struggling to finish the course can be discouraging. Even if you feel like giving up, you still need to pass. Don't hesitate—reach out to Trusted Class Helper's subject experts. We'll guide your daily coursework and help you achieve A or B grades.
                            </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 lg:w-1/2 lg:border-r-0 border-button px-4 py-5 sm:px-8 sm:py-8">
                            <img className='w-12' src={image03} alt="" />
                            <h3 className="mt-2 text-xl">Time Management in Online Learning</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-normal">
                                Gaining a solid understanding of complex topics requires consistent study time. Online courses usually involve frequent assignments to reinforce learning, which can be tough to manage with a busy schedule. Trusted Class Helper offers practical solutions to keep you on track, so you can hit your academic targets without burnout.
                            </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 border-button lg:w-1/2 lg:border-b-0 px-4 py-5 sm:px-8 sm:py-8">
                            <img className='w-12' src={image01} alt="" />
                            <h3 className="mt-2 text-xl">Feeling the Pressure of Deadlines?</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-normal">
                                Deadlines can be stressful, especially when you've got multiple responsibilities. Online courses often have regular tasks that must be submitted on time to maintain good grades. At Trusted Class Helper  we offer dedicated assignment support, helping you meet deadlines with confidence and less worry.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/2 px-4 py-5 sm:px-8 border-button sm:py-8">
                            <img className='w-12' src={image02} alt="" />
                            <h3 className="mt-2 text-xl">Balancing Work and Studies</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-normal">
                                Juggling a full-time job while taking an online course is no small feat. With limited time for thorough study, performance can suffer. Trusted Class Helper provides flexible support, helping you manage your academic load alongside professional duties, so achieving success in both spheres is far more attainable.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WhyChooseUsForHelpWithClass
