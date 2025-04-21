import React from "react";
import Faq from "../home/Faq";
import Process from "../home/Process";
import LogoGrid from "../home/LogoGrid";
import Button from "../../components/Button";
import Testimonial from "../home/Testimonial";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import TrustSec from "../../components/TrustSec";
import Subject from "../../components/Subject";
import CtaOne from "../home/CtaOne";
import CtaTwo from "../home/CtaTwo";
import "../home/Home.css";
import "./service.css";
import { Helmet } from "react-helmet";
import EmailFormForAssignment from "../../components/email-forms/EmailFormForAssignment";
import ProcessForAssignments from "../../components/ProcessForAssignments";
import Comparison from "../../components/Comparison";
import AssignmentServices from "../../components/AssignmentServices";
import Samples from "../../components/OurSample";

// sample images
import sample01 from '../../assets/assignment/sample01.jpeg';
import sample02 from '../../assets/assignment/sample02.jpeg';
import sample03 from '../../assets/assignment/sample03.jpeg';
import sample04 from '../../assets/assignment/sample04.jpeg';
import sample05 from '../../assets/assignment/sample05.jpeg';
import FaqAssignment from "../home/FaqAssignment";
import SubjectExperts from "../../components/SubjectExperts";

const Assignments = () => {

  const images = [
    {
      img: sample01,
    },
    {
      img: sample02,
    },
    {
      img: sample03,
    },
    {
      img: sample04,
    },
    {
      img: sample05,
    },
  ];

  const assignmentServiceData = [
    {
      name: "Lab Assignments",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_1.png?v=1713362546",
    },
    {
      name: "Certification Courses",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_2.png?v=1713362546",
    },
    {
      name: "Online Discussions",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_3.png?v=1713362546",
    },
    {
      name: "Take-Home Exams",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_4.png?v=1713362546",
    },
    {
      name: "Case Studies",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_5.png?v=1713362546",
    },
    {
      name: "Internship Courses",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/news_6.png?v=1713362546",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Write My Assignment | Help Me to Do my Assignment</title>
      </Helmet>

      {/* --------------- HERO SECTION ---------------  */}
      <section className="text-white home_backgroundImage mb-0 lg:mb-0">
        <div className="max-w-7xl mx-auto md:px-10 pt-28 pb-10 flex justify-center items-center min-h-[100vh] relative z-10">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {/* CONTENT */}
            <div className="lg:flex-grow md:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
              <h2 className="mb-3 sm:mb-4 text-3xl font-semibold tracking-wide w-full lg:max-w-lg md:text-4xl">
                Stressed About Assignments? Let Our Experts Lighten Your Load!
              </h2>
              <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg  font-normal">
                Managing multiple assignments can be daunting—strict deadlines, intricate requirements, and high standards often create pressure. Trusted Class Helper is here to transform that stress into success. Our top-rated, highly qualified professionals provide tailored support, ensuring every assignment meets—and exceeds—your academic goals.
              </p>

              <div className="mt-4 flex justify-start">
                <Button text="Lets Chats" />
              </div>
            </div>
            {/* EMAIL FORM */}
            <div className="lg:max-w-lg lg:w-1/2 w-full px-2 mt-10 lg:mt-0">
              <EmailFormForAssignment />
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
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72179.png?v=1712918885"
            />
          </div>

          <div className="lg:flex-grow px-5 md:px-5 md:w-1/2 md:pl-6 lg:pl-14 xl:pl-12 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              Choose Our Experienced Assignment Experts
            </h1>
            <p className="mb-3 leading-relaxed">
              At Trusted Class Helper , we appreciate how essential high-quality writing is for academic success. Our seasoned professionals excel at delivering carefully researched, well-structured, and expertly formatted assignments—always delivered punctually. Trust our team to boost your grades while lightening your academic load.
            </p>
            <p className="mb-4 leading-relaxed">
              Ready to Begin?
            </p>
            <div className="flex justify-start">
              <Button text="Order Now" />
            </div>
          </div>
        </div>
      </section>

      {/* --------------- WHY CHOOSE US ---------------  */}
      <AssignmentServices />

      <Samples />

      {/* --------------- CTA SECTION ---------------  */}
      <CtaOne text="Help Me With Assignment" />

      {/* --------------- PROOF ---------------  */}
      <section className="bg-white">
        <div className="max-w-5xl px-5 xl:px-0 mx-auto pt-20 pb-10">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Proof of Our Excellence:
          </h2>
          <h2 className="mb-3 font-bold text-2xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Achieved A-Grades for Students!
          </h2>

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

      {/* --------------- PROCESS WE FOLLOW ---------------  */}
      <ProcessForAssignments />

      {/* --------------- COMPARISON ---------------  */}
      <Comparison
        mainHeading="Why Should You Hire Us for Assignments & Homework?"
        subHeading="We fulfill the standards of all universities and schools, ensuring our support aligns seamlessly with your coursework."
        buttonText="Help Me With Assignment"
      />

      {/* --------------- SERVICES ---------------  */}
      <SubjectExperts />

      {/* --------------- SECOND CTA SECTION ---------------  */}
      <CtaTwo heading="Don't let challenging assignments drag you down—secure the grades you deserve with expert help!" text="Hire an Expert" />

      {/* --------------- ASSIGNMENT SERVICE ---------------  */}
      <section className="bg-[#F4F8FE]">
        <div className="max-w-5xl mx-auto py-20 px-6 lg:px-0">
          {/* --------------- HEADER TEXT ---------------  */}
          <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
            Assignment Services
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-6">
            {assignmentServiceData.map((data, index) => (
              <div
                key={index}
                className="min-w-72 flex items-center text-black bg-white rounded-[2rem] shadow cursor-pointer"
              >
                <span className="bg-button h-full w-16 mr-2 flex justify-center items-center rounded-full">
                  <img className="p-4" src={data.image} alt="" />
                </span>
                <span className="mx-3 font-medium text-md">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------- SUBJECT DETAILS ---------------  */}
      <Subject heading="Subjects We have Professionals For" />

      {/* --------------- FAQ'S ---------------  */}
      <FaqAssignment />

      {/* --------------- TESTIMONIAL ---------------  */}
      <Testimonial />
    </>
  );
};

export default Assignments;
