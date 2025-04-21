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

const FaqClass = () => {
    const faqs = [
        {
            question: "Is it safe to pay someone to assist with my online class?",
            answer: "Yes. It's safe when you choose a reputable service like Trusted Class Helper . We safeguard client confidentiality, use secure payment methods, and protect your personal information. Our strict privacy standards ensure peace of mind."
        },
        {
            question: "How do you guarantee the quality of work?",
            answer: "Our team consists of over 50+ top-rated professionals with advanced degrees in various disciplines. They deliver high-quality, plagiarism-free work that meets academic expectations. Our 98% A/B grade record speaks to our dedication to excellence."
        },
        {
            question: "What subjects and courses do you cover?",
            answer: "We support a wide array of subjects, from business and law to nursing, engineering, and computer science. Whatever your course level or specificity, we have specialists equipped to help you."
        },
        {
            question: "How does the process work after I place an order?",
            answer: "Once you order, we assign a subject expert who will mentor you through your online class. Expect regular updates, punctual task completions, and 24/7 availability to answer any queries or offer progress insights."
        },
        {
            question: "What if I don't get the grade I expected?",
            answer: "We stand behind our commitment to quality. If the agreed-upon grade isn't achieved, we'll honor our refund policy—keeping your investment safe."
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
                <Button text="Help Me With Class" />
            </div>

        </div>
    );
};

export default FaqClass;
