import React from 'react'
import ButtonSq from '../../components/buttons/buttonSq'

const HomeOfferExpert = () => {
    const subjects = [
        // Row 1
        { name: "Nursing" },
        { name: "Archaeology" },
        { name: "Economics" },
        { name: "Environmental" },
        { name: "Biological Science" },
        { name: "Political science" },
        // Row 2
        { name: "Computer Science" },
        { name: "Media Studies" },
        { name: "Pharmacology" },
        { name: "Music & Visual Arts" },
        { name: "Religion & Theology" },
        { name: "Medicine & surgery" },
        // Row 3
        { name: "Law & Legal" },
        { name: "Psychology" },
        { name: "Art & Design" },
        { name: "Engineering" },
        { name: "Education Marketing" },
        { name: "Philosophy" },
        // Row 4
        { name: "Creative Thinking" },
        { name: "Geography" },
        { name: "Math" },
        { name: "History" },
        { name: "Business Administration" },
        { name: "Information Technology" },
    ]

    return (
        <>
            <section className="bg-accent w-full">
                <div className="max-w-7xl mx-auto py-14 px-4 sm:px-0">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold  text-3xl md:text-4xl mx-auto text-dark text-center">
                        We Offer Expert Academic Support Tailored To Our Needs.
                    </h2>
                    <p className="w-full mx-auto text-dark text-center text-sm sm:text-[16px]">
                        Our skilled professionals deliver outstanding results with a focus on excellence, attention to detail, and timely delivery. Whether you need help with online
                        classes, courses, or assignments, Online Course Mentor is your trusted resource for success.
                    </p>


                    <div className="mt-5 p-4 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                            {subjects.map((subject, index) => (
                                <button
                                    key={index}
                                    className={`py-5 px-4 rounded-md border border-gray-400 text-center font-medium text-sm bg-[#f8f0f7] text-gray-800 hover:bg-orange-500 hover:text-white`}
                                >
                                    {subject.name}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div className="mt-3 flex justify-center items-center">
                        <ButtonSq text="Order Now" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default HomeOfferExpert
