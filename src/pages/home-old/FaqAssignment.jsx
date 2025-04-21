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

const FaqAssignment = () => {
    const faqs = [
        {
            question: "Can You Assist Me with My Assignment?",
            answer: "Absolutely! Our skilled writers at Trusted Class Helper are prepared to handle your assignments. Just submit your order, and we'll deliver a thoroughly researched, high-quality paper customized to your needs."
        },
        {
            question: "Can You Help Me with My Assignment Confidentially?",
            answer: "Certainly. At Trusted Class Helper , we prioritize your privacy. Rest assured that your personal details and assignment information remain confidential, ensuring a secure and discreet experience."
        },
        {
            question: "How Can I Get Assistance with My Assignment?",
            answer: "It's simple. Visit Trusted Class Helper website, fill in the order form with your assignment details, and our team will quickly connect with you to offer the support you need."
        },
        {
            question: "What Guarantees Do You Provide for Assignment Assistance?",
            answer: "We promise on-time delivery, originality, and content that meets your exact specifications. If you're not entirely happy, we offer revisions to align the final result with your expectations."
        },
        {
            question: "How Can I Pay for Assignment Assistance?",
            answer: "Paying for your order is straightforward with Trusted Class Helper . After placing your request, choose from trusted payment methods, including credit cards, PayPal, and others."
        },
        {
            question: "Do You Offer Online Assignment Help for All Subjects?",
            answer: "Yes! Trusted Class Helper covers an extensive range of disciplines. Whatever your major or focus area, our specialists can assist you, ensuring thorough and accurate help across fields like business, nursing, engineering, humanities, and more."
        },
        {
            question: "What If I'm Not Satisfied with the Assignment Help?",
            answer: "Your satisfaction is our priority. If you're not pleased with the assignment, we'll make as many adjustments as needed. Moreover, our money-back guarantee protects your investment, so you can work with us worry-free."
        },
        {
            question: "Can I Communicate with the Expert Working on My Assignment?",
            answer: "Yes. At Trusted Class Helper , we encourage direct communication. You can contact your assigned expert through a secure messaging system, share extra resources, or seek clarification on any part of the assignment."
        },
        {
            question: "How does Trusted Class Helper handle plagiarism in assignments?",
            answer: "Originality is vital to our process. We perform in-depth research, apply proper referencing, and use advanced plagiarism detection tools to ensure each paper is both unique and academically sound."
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

export default FaqAssignment;
