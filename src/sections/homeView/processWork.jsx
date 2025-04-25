import React from 'react';

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
        <p className="mt-4 px-4 leading-relaxed text-gray-800">{answer}</p>
    </details>
);

const HomeFaq = () => {
    const faqs = [
        {
            question: "Can You Assist Me with My Assignment?",
            answer: "Absolutely! Our skilled writers at USA Class Experts are prepared to handle your assignments. Just submit your order, and we'll deliver a thoroughly researched, high-quality paper customized to your needs."
        },
        {
            question: "Can You Help Me with My Assignment Confidentially?",
            answer: "Certainly. At USA Class Experts , we prioritize your privacy. Rest assured that your personal details and assignment information remain confidential, ensuring a secure and discreet experience."
        },
        {
            question: "How Can I Get Assistance with My Assignment?",
            answer: "It's simple. Visit USA Class Experts website, fill in the order form with your assignment details, and our team will quickly connect with you to offer the support you need."
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
        </div>
    );
};

export default HomeFaq;
