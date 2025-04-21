import { Helmet } from "react-helmet";
import { FaArrowRightLong } from "react-icons/fa6";

// Shared Components
import Button from "../../components/Button";
import Subject from "../../components/Subject";
import WhyChooseUs from "../../components/WhyChooseUs";
import TrustSec from "../../components/TrustSec";
import CtaOneV2 from "../../components/CtaOneV2";
import EmailForm from "../../components/EmailForm";
import ExpertsAvailable from "../../components/ExpertsAvailable";
import Comparison from "../../components/Comparison";

// Page-specific Components
import Faq from "../home/Faq";
import Process from "../home/Process";
import LogoGrid from "../home/LogoGrid";
import Testimonial from "../home/Testimonial";
import CtaOne from "../home/CtaOne";
import CtaTwo from "../home/CtaTwo";

// Styles
import "../home/Home.css";
import EmailFormForHelpWithClass from "../../components/email-forms/EmailFormForHelpWithClass";
import WhyChooseUsForHelpWithClass from "../../components/WhyChooseUsForHelpWithClass";
import ProcessForHelpWithClass from "../../components/ProcessForHelpWithClass";
import FaqClass from "../home/FaqClass";

import img01 from "../../assets/img01.webp"
import { Link } from "react-router-dom";


// classes
import classesimg01 from '../../assets/samples-classes/img01.jpeg'
import classesimg02 from '../../assets/samples-classes/img02.jpeg'
import classesimg03 from '../../assets/samples-classes/img03.jpeg'
import classesimg04 from '../../assets/samples-classes/img04.jpeg'
import classesimg05 from '../../assets/samples-classes/img05.jpeg'
import classesimg06 from '../../assets/samples-classes/img06.jpeg'
import classesimg07 from '../../assets/samples-classes/img07.jpeg'
import classesimg08 from '../../assets/samples-classes/img08.jpeg'
import classesimg10 from '../../assets/samples-classes/img10.jpeg'
import HelpWithClassServices from "../home/HelpWithClassServices";
import EmailFormForHelpWithCourses from "../../components/email-forms/EmailFormForHelpWithCourses";
import WhyChooseUsForHelpWithCourses from "../../components/WhyChooseUsForHelpWithCourses";
import ProcessForHelpWithCources from "../../components/ProcessForHelpWithCources";
import FaqClassCourses from "../home/FaqClassCourses";


const HelpWithCourse = () => {
  const images = [
    {
      img: classesimg01,
    },
    {
      img: classesimg02,
    },
    {
      img: classesimg03,
    },
    {
      img: classesimg04,
    },
    {
      img: classesimg05,
    },
    {
      img: classesimg06,
    },
    {
      img: classesimg07,
    },
    {
      img: classesimg08,
    },
    {
      img: classesimg10,
    },
  ];

  const handleMoveToTop = () => {
    window.scroll(0, 0)
  }

  const StudyHelpersData = [
    "Comprehensive Course Management",
    "Expert Assistance",
    "Flexible Scheduling",
    "Progress Tracking",
  ]

  const tick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" /></svg>
  )

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Help With Course</title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white home_backgroundImage_2 mb-0 lg:mb-0">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[100vh] relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="px-4 sm:px-5 lg:flex-grow lg:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold tracking-wide w-full lg:max-w-md md:text-3xl lg:text-4xl">
                Pay an Expert for Online Course Assistance and Elevate Your Grades!
              </h2>
              <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg font-normal">
                Are your online courses feeling overwhelming? Don't stress—Trusted Class Helper is here with specialized “Take My Online Course” services, backed by years of academic expertise. Our seasoned professionals guide you through each step, from routine lectures to demanding projects, ensuring you excel without sacrificing your peace of mind.
              </p>

              {StudyHelpersData?.map((data, index) => (
                <div key={index} className="flex gap-x-2 sm:gap-x-3 justify-start items-center">
                  <span className="icon text-green-500">
                    {tick}
                  </span>
                  <p className='text-sm sm:text-lg font-semibold'>{data}</p>
                </div>
              ))}

              <div className="mt-6 flex justify-start">
                <Button text="Order Now" />
              </div>

            </div>

            {/* EMAIL FORM */}
            <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
              <EmailFormForHelpWithCourses />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- TRUST SECTION ---------------  */}
      <TrustSec />

      {/* --------------- LOGO GRID ---------------  */}
      <LogoGrid />

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-1 sm:px-4 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-3xl"
              alt="img"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/5.png?v=1742020577"
            />
          </div>

          <div className="lg:flex-grow px-5 md:px-5 md:w-1/2 md:pl-6 lg:pl-14 xl:pl-12 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-lg text-3xl md:text-4xl text-[#272727]">
              Struggling with Your Online Courses? Let Our Experts Assist!
            </h1>
            <p className="mb-6 leading-relaxed">
              Balancing multiple online courses can be challenging. With Trusted Class Helper, you gain access to top-tier academic specialists who provide comprehensive course management: from attending online sessions and completing assignments to participating in discussions. Our experts tailor their support to your exact needs, delivering high-quality, plagiarism-free work that meets rigorous university standards.
            </p>
            <div className="flex justify-start">
              <Button text="Live Chat" />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- WHY CHOOSE US ---------------  */}
      <WhyChooseUsForHelpWithCourses />

      {/* --------------- CTAV2 ---------------  */}
      <CtaOneV2
        mainHeading="Ready to Stop Stressing Over Your Grades?"
        subHeading="Teaming up with our experts is a cost-effective step toward improved academic outcomes."
        buttonText="Order Now"
      />

      {/* --------------- COMPARISON ---------------  */}
      <Comparison
        mainHeading="Why Should You Hire Us to Support Your Online Course?"
        subHeading="We adapt to the academic standards of all educational institutions, ensuring every lecture, assignment, and project aligns with your curriculum's requirements."
        buttonText="Hire Now"
      />

      {/* --------------- PROOF ---------------  */}
      {/* <section className="bg-white">
        <div className="max-w-5xl px-5 xl:px-0 mx-auto pt-20 pb-10">
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            We Helped Students Achieved A+ Grades
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
            {images.map((data, index) => (
              <div key={index} className="my-3">
                <img
                  className="rounded-lg h-full border border-gray-300"
                  src={data.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOne text="Order Now" />

      {/* --------------- PROCESS WE FOLLOW ---------------  */}
      <ProcessForHelpWithCources />


      {/* --------------- SECOND CTA SECTION ---------------  */}
      <CtaTwo heading="Take Your Grades to New Heights with Trusted Class Helper" text="Order Now" />

      {/* --------------- FAQ'S ---------------  */}
      <FaqClassCourses />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default HelpWithCourse;
