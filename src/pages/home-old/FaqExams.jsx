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
        <p className="mt-4 px-4 leading-relaxed text-gray-700">{answer}</p>
    </details>
);

const FaqExams = () => {
    const faqs = [
        {
            question: "Is it safe and confidential to hire experts for my online exam?",
            answer: "Absolutely. Your privacy is our priority, and we utilize secure measures to protect both your data and identity. You can rely on us for trustworthy support without compromising personal details."
        },
        {
            question: "How do you ensure high grades on my exam?",
            answer: "Our team features highly qualified experts across multiple fields, selected based on strong academic backgrounds and proven experience. With a focus on A/B grades, our track record underscores our dedication to superior results."
        },
        {
            question: "Which subjects or exam types do you handle?",
            answer: "We cover a wide scope, from math and science to business, engineering, nursing, and more. Whether it's a quiz, midterm, or final, our experts can assist at any academic level."
        },
        {
            question: "How does the process work once I book an exam with you?",
            answer: "After you place an order, we pair you with a subject expert who will guide you. Expect timely updates, and rest assured your exam will be managed punctually for optimal results. Our support team is on standby 24/7 to address any questions."
        },
        {
            question: "What if I don't achieve the grade I want?",
            answer: "Quality is our moral code. If the agreed-upon grade isn't reached, we offer a refund—partial or full, depending on the circumstances—under our satisfaction guarantee. We aim to provide exam help without risks."
        },
        {
            question: "Can I talk directly with the expert handling my exam?",
            answer: "Yes. Direct communication with your assigned specialist is available whenever necessary. This ensures clarity on requirements and addresses any specific concerns to guarantee a smooth experience."
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

export default FaqExams;
