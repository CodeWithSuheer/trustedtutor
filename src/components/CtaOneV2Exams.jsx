import React from 'react'
import { FaPhone } from "react-icons/fa6";
import PhoneNumberForm from './PhoneNumberForm';
import Button from './Button';

const CtaOneV2Exams = ({
  desc = "Hiring us to take your online class for you is a small investment for good grades"
}) => {
  return (
    <>
      <section className="body-font bg-gray-50">
        <div className="max-w-6xl mx-auto flex px-5 py-12 sm:py-20 md:flex-row flex-col items-center">

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">

            <div className="lg:col-span-3 lg:flex-grow pr-0 sm:pr-8 flex flex-col text-start justify-center">

              <h1 className="mb-1 pb-3 font-bold max-w-xl text-3xl md:text-5xl bg-gradient-to-tr from-violet-700  to-violet-300 bg-clip-text text-transparent">Take the Pressure Off Exams—Get Expert Assistance Today!</h1>

              <p className="mb-6 max-w-md text-gray-700 leading-relaxed text-lg">{desc}</p>

              <div className="button">
                <div className="flex justify-start">
                  <Button text="Book My Exam Help Now" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:max-w-lg lg:w-full mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/S5.png?v=1736183448" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default CtaOneV2Exams
