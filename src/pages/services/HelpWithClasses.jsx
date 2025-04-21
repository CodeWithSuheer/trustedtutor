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


const HelpWithClasses = () => {
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
    "Comprehensive Class Management",
    "Subject Matter Expertise",
    "Flexible Scheduling",
    "Personalized 24/7 Support",
  ]

  const tick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" /></svg>
  )

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Help With Class</title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white home_backgroundImage_2 mb-0 lg:mb-0">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[100vh] relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="px-4 sm:px-5 lg:flex-grow lg:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold tracking-wide w-full lg:max-w-md md:text-3xl lg:text-4xl">
                Pay an Expert for Online Class Assistance and Improve Your Grades!
              </h2>
              <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg font-normal">
                Are your online classes getting overwhelming? Don’t worry—Trusted Class Helper  is here to help! Our experienced tutors and academic specialists provide the support you need to succeed in your coursework.
              </p>

              {StudyHelpersData?.map((data, index) => (
                <div key={index} className="flex gap-x-2 sm:gap-x-3 justify-start items-center">
                  <span className="icon text-green-500">
                    {tick}
                  </span>
                  <p className='text-sm sm:text-lg font-semibold'>{data}</p>
                </div>
              ))}
            </div>

            {/* EMAIL FORM */}
            <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
              <EmailFormForHelpWithClass />
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
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/S6.png?v=1736184663"
            />
          </div>

          <div className="lg:flex-grow px-5 md:px-5 md:w-1/2 md:pl-6 lg:pl-14 xl:pl-12 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-lg text-3xl md:text-4xl text-[#272727]">
              Struggling with Your Online Classes? Let Our Experts Assist!
            </h1>
            <p className="mb-6 leading-relaxed">
              Managing online coursework can feel daunting, but you don’t have to tackle it on your own. With Trusted Class Helper , you gain access to 50+ highly qualified professionals who guide you toward academic excellence. Our team delivers high-quality, plagiarism-free work that meets rigorous academic standards—so say goodbye to deadline anxiety and tough assignments, and embrace expert support for peace of mind. We’ll handle your coursework with care and precision, giving you the freedom to focus on your priorities.
            </p>
            <div className="flex justify-start">
              <Button text="Get Your Free Quote Now!" />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- WHY CHOOSE US ---------------  */}
      <WhyChooseUsForHelpWithClass />

      {/* --------------- CTAV2 ---------------  */}
      <CtaOneV2
        mainHeading="Ready to stop stressing about your grades?"
        subHeading="Connecting with our experts is a small investment toward better academic results."
        buttonText="Get Your Class Help Now"
      />

      {/* --------------- COMPARISON ---------------  */}
      <Comparison
        mainHeading="Why Should You Hire Us to Support Your Online Class?"
        subHeading="Our services align with the standards of all universities and schools, ensuring our assistance fulfills your academic needs."
      />

      {/* --------------- PROOF ---------------  */}
      <section className="bg-white">
        <div className="max-w-5xl px-5 xl:px-0 mx-auto pt-20 pb-10">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            We Helped Students Achieved A+ Grades
          </h2>
          {/* <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Achieved A-Grades for Students!
          </h2> */}

          {/* --------------- CONTENT ---------------  */}
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
      </section>

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOne text="Help Me with My Class" />

      {/* --------------- PROCESS WE FOLLOW ---------------  */}
      <ProcessForHelpWithClass />

      {/* --------------- SERVICES ---------------  */}
      <HelpWithClassServices />

      {/* --------------- SECOND CTA SECTION ---------------  */}
      <CtaTwo text="Help Me with My Class" />

      {/* --------------- SUBJECT DETAILS ---------------  */}
      <Subject />

      {/* --------------- FAQ'S ---------------  */}
      <FaqClass />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default HelpWithClasses;
