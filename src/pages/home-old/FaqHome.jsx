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

const FaqHome = () => {
    const faqs = [
        {
            question: "Will anyone know I'm using your services?",
            answer: "Your privacy is paramount. We operate under strict confidentiality and do not share your information with any external parties. Rest assured, all aspects of our collaboration remain discreet and secure."
        },
        {
            question: "Will you match me with the right subject expert?",
            answer: "Absolutely! Once you provide details about your course, we'll pair you with a specialized academic professional who understands your subject. If you're unsure who's the best fit, we'll select the perfect expert on your behalf."
        },
        {
            question: "How quickly can you complete my project?",
            answer: "We recognize how important deadlines are. Our team is skilled at managing urgent requests without compromising quality. Whether you have a few days or just a few hours, count on us to deliver promptly."
        },
        {
            question: "What if I'm not fully satisfied with the results?",
            answer: "Your satisfaction is our priority. We offer revisions to fine-tune the work until it meets your standards. In rare instances where you still aren't satisfied, we'll discuss refunds or alternatives based on our policy."
        },
        {
            question: "Can you support all my course assignments and quizzes while ensuring academic integrity?",
            answer: "Yes. We provide assistance for a wide range of tasks—from assignments and quizzes to practice sessions for even the most secure exams. Our content is always original, thoroughly researched, and verified to be free of plagiarism."
        },
        {
            question: "How do I request assistance for my online exam?",
            answer: "Getting started is easy. Reach out via live chat or complete our contact form, providing relevant exam details. Once we have your information, we'll assign an appropriate expert to guide you through exam preparation."
        },
        {
            question: "Can I communicate directly with the subject experts?",
            answer: "Certainly! We encourage direct communication so you can ask questions, provide updates, or add instructions, ensuring the work aligns perfectly with your academic objectives."
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
                <Button text="Get a Free Quote Now" />
            </div>

        </div>
    );
};

export default FaqHome;
