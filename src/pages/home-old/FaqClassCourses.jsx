import React from 'react';
import Button from '../../components/Button';

const AccordionItem = ({ question, answer }) => (
    <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 border border-button rounded-lg bg-white p-4 text-gray-900"
            aria-expanded="false"
        >
            <h3 className="font-medium">{question}</h3>
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
        <p className="mt-4 px-4 leading-relaxed text-gray-700">{answer}</p>
    </details>
);

const FaqClassCourses = () => {
    const faqs = [
        {
            question: "Is it safe to pay for help with my online course?",
            answer: "Yes. We prioritize your privacy and use trusted payment methods, so your personal information stays protected. Our commitment to confidentiality ensures your data is never compromised."
        },
        {
            question: "How do you ensure top-notch quality in my coursework?",
            answer: "Our team comprises 50+ highly qualified tutors, each specializing in different fields. They deliver thorough, plagiarism-free work that aligns with your course standards—our 98% A/B success rate showcases our dedication to excellence."
        },
        {
            question: "What subjects or levels do you handle?",
            answer: "We cater to a broad scope of subjects: from business and law to engineering, computer science, and more. Our experts are equipped to guide you through various academic levels and specializations."
        },
        {
            question: "How does the process work after I place an order?",
            answer: "Once your order is confirmed, we assign the most suitable expert to manage your online course. Expect timely updates, completed tasks, and 24/7 support for any questions or progress updates."
        },
        {
            question: "What happens if I'm not satisfied with my final grade?",
            answer: "We stand by our commitment to quality. If the promised grade isn't achieved, you can rely on our refund policy to safeguard your investment."
        },
    ];

    return (
        <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 xl:px-0">
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

export default FaqClassCourses;

