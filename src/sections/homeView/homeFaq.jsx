import React from 'react';
import Button from '../../components/buttons/Button';

const AccordionItem = ({ question, answer }) => (
    <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 border border-button rounded-lg bg-white p-4 text-gray-900"
            aria-expanded="false"
        >
            <h3 className="font-medium text-sm sm:text-[1rem]">{question}</h3>
            <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-button"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </summary>
        <p className="mt-4 px-4 leading-relaxed text-sm sm:text-[1rem] text-gray-800">{answer}</p>
    </details>
);

const HomeFaq = () => {
    const faqs = [
        {
            question: "How does your online class assistance service work?",
            answer: "Our process is simple: share your course details, deadlines, and specific requirements with us. We match you with a qualified expert who will handle assignments, exams, discussions, or even manage the entire course on your behalf. You'll receive regular updates and can communicate directly with your expert throughout the process."
        },
        {
            question: "Are your tutors qualified to handle my coursework?",
            answer: "Absolutely. Our team consists of experienced professionals with advanced degrees (Master's or PhD) in their respective fields. They undergo rigorous vetting to ensure expertise in subjects like math, science, business, IT, and humanities. Rest assured, your coursework is in capable hands."
        },
        {
            question: "How do you ensure confidentiality and data security?",
            answer: "Privacy is our top priority. We use encrypted communication channels, secure payment gateways, and strict non-disclosure agreements (NDAs) to protect your identity and academic integrity. Your personal information and involvement with our service are never shared with third parties."
        },
        {
            question: "What if I'm unsatisfied with the service provided?",
            answer: "We offer a satisfaction guarantee. If the work doesn't meet your expectations, you can request unlimited revisions at no extra cost. In rare cases where we can't resolve the issue, a partial or full refund may be provided, depending on the circumstances."
        },
        {
            question: "Which subjects or courses do you cover?",
            answer: "We support a wide range of subjects, including STEM (math, engineering, computer science), business, nursing, social sciences, and humanities. Whether it's a high school course, undergraduate class, or graduate-level program, we have experts ready to assist."
        },
        {
            question: "Can you help with urgent deadlines or last-minute requests?",
            answer: "Yes! Our team works around the clock to accommodate urgent needs. Whether it's a 24-hour exam deadline or a same-day assignment, we prioritize urgent requests to ensure timely delivery without compromising quality."
        },
    ];

    return (
        <div className="max-w-4xl mx-auto pt-20 pb-32 sm:pb-24 px-4 sm:px-6 xl:px-0">
            <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
                Frequently Asked Questions
            </h2>
            <div className="space-y-6 mt-10">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>

            <div className="mt-10 flex justify-center items-center">
                <Button text="Order Now" />
            </div>
        </div>
    );
};

export default HomeFaq;
