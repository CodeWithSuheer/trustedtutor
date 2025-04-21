import React from 'react'
import Button from './Button';

const content = [
    {
        id: 1,
        title: "Quizzes",
        description: "Quick assessments that test specific concepts. Our experts provide the guidance you need to stay ahead."
    },
    {
        id: 2,
        title: "Proctored Exams",
        description: "Secure, supervised exams under strict guidelines. We offer trustworthy strategies to help you handle these monitored environments confidently."
    },
    {
        id: 3,
        title: "Entrance Exams",
        description: "From SATs to graduate-level tests like the GRE, GMAT, or MCAT, our guidance and prep resources boost your self-assurance and performance."
    },
    {
        id: 4,
        title: "Lockdown Exams",
        description: "Gain specialized insights for exams with advanced security features like lockdown browsers or remote proctoring, ensuring you’re fully prepared."
    },
    {
        id: 5,
        title: "Midterms & Finals",
        description: "Critical tests that influence your overall grade. We reinforce your understanding, refine exam techniques, and help you reach top results."
    },
    {
        id: 6,
        title: "Certification Exams",
        description: "Elevate your career with professional certifications. Our dedicated experts enhance your skills and readiness for essential qualifications."
    }
];



const HelpWithAllType = () => {
    return (
        <>
            <section className='mt-10 py-10 sm:py-20 bg-gray-50'>
                <div className="max-w-7xl mx-auto px-4 xl:px-0">

                    <div className="mb-14 header">
                        <h2 className="font-bold text-2xl md:text-4xl w-[95%] max-w-5xl mx-auto text-[#272727] text-start sm:text-center">
                            Comprehensive Support for All Types of Online Exams—We've Got You Covered!
                        </h2>
                    </div>


                    <div className="content grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
                        {content?.map((data) => (
                            <div key={data?.id}>
                                <h2 className='text-lg font-semibold'>{data?.title}</h2>
                                <p className='text-[16px] font-normal text-gray-800'>{data?.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center items-center">
                        <Button text="Place an Order Now" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HelpWithAllType
