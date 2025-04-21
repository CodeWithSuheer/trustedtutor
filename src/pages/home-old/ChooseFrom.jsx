import React from 'react'
import { FaDotCircle } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from '../../components/Button';
import image01 from '../../assets/studyhelpers-assets/images/S4.png'

const ChooseFrom = () => {
    return (
        <>
            <section className="text-black body-font bg-[#F4F8FE]">
                <div className="max-w-6xl mx-auto flex px-1 sm:px-5 py-24 md:flex-row flex-col items-center">

                    {/* IMAGE */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/2_c3012b1f-60c3-4a0a-bb40-b4fd42ef5ecc.png?v=1742020582" />
                    </div>

                    {/* CONTENT */}
                    <div className="lg:flex-grow px-4 md:w-1/2 xl:pl-20 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-start">
                        <h2 className="mb-3 sm:mb-4 text-2xl font-semibold capitalize text-black lg:text-4xl">Access Top-Rated Subject Specialists Today</h2>
                        <p className="mb-3 sm:mb-4 text-md leading-6 font-normal text-black">
                            Overwhelmed by multiple deadlines? Seeking to excel in complex subjects? Trusted Class Helper connects you with accomplished academic experts who offer personalized support—so you can learn more efficiently, build confidence, and achieve notable results.
                        </p>

                        <div className="mt-3 flex justify-start">
                            <Button text="Order Now" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseFrom
