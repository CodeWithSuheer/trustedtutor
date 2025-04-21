import React from 'react'
import image01 from '../assets/studyhelpers-assets/helpWithClass/calendar.png'
import image02 from '../assets/studyhelpers-assets/helpWithClass/running-man.png'
import image03 from '../assets/studyhelpers-assets/helpWithClass/save-time.png'
import image04 from '../assets/studyhelpers-assets/helpWithClass/traffic-signal.png'

const WhyChooseUsForHelpWithCourses = () => {
    return (
        <>
            <section className='bg-[#F4F8FE]'>
                <div className="max-w-5xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold pl-2 text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-start sm:text-center">Why Choose Us</h2>
                    <p className='w-[90%] sm:w-[80%] lg:w-[65%] mx-auto text-black text-start sm:text-center'>At Trusted Class Helper, we’re committed to surpassing university and college requirements, ensuring your coursework aligns perfectly with academic criteria.</p>


                    <div className="flex flex-wrap my-10 sm:my-12">


                        <div className="w-full border-b md:w-1/2 md:border-r border-button lg:w-1/2 px-4 py-5 sm:px-8 sm:py-8">
                            <img className='w-12' src={image04} alt="" />
                            <h3 className="mt-2 text-xl">Least Interest in Specific Courses</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-normal">
                                Feeling unmotivated by certain subjects? Instead of letting a dull course drag your GPA down, let our professionals handle the day-to-day tasks. We’ll manage discussions, assignments, and more—all while aiming for A or B grades in each module.
                            </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 lg:w-1/2 lg:border-r-0 border-button px-4 py-5 sm:px-8 sm:py-8">
                            <img className='w-12' src={image03} alt="" />
                            <h3 className="mt-2 text-xl">Time Management in Online Learning</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-normal">
                                Deep comprehension often requires consistent engagement and multiple projects. If you’re balancing work, family, or other responsibilities, Trusted Class Helper provides a structured, around-the-clock approach to keep you on track without burning out.
                            </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 border-button lg:w-1/2 lg:border-b-0 px-4 py-5 sm:px-8 sm:py-8">
                            <img className='w-12' src={image01} alt="" />
                            <h3 className="mt-2 text-xl">Feeling the Pressure of Deadlines?</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-normal">
                                Deadlines can be stressful, especially when juggling classes that each demand punctual submissions. Our “Take My Online Course” service streamlines every component—ensuring you never miss a due date. We handle the heavy lifting so you can focus on actual learning.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/2 px-4 py-5 sm:px-8 border-button sm:py-8">
                            <img className='w-12' src={image02} alt="" />
                            <h3 className="mt-2 text-xl">Balancing Work and Studies</h3>
                            <p className="mt-2 text-gray-700 text-sm leading-normal">
                                If a full-time job leaves you little room to study, count on Trusted Class Helper for flexible scheduling and full-course management. With our help, meeting professional and academic obligations becomes far more manageable.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WhyChooseUsForHelpWithCourses
