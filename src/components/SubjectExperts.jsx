import React from 'react'
import Button from './Button';

const data = [
    {
        name: "David Carlton",
        degree: "MS in Computer Science",
        expertise: "Extensive background in computer science assignments, with 12 years of experience.",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Ellipse_11.png?v=1713362272",
    },
    {
        name: "Anna Taylor",
        degree: "MS in Applied Mathematics",
        expertise: "Specializing in math assignments, bringing a decade of professional experience.",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Ellipse_11-3.png?v=1713362273",
    },
    {
        name: "Michael Lee",
        degree: "MS in Applied Mathematics",
        expertise: "An authority in mathematics with 10 years of hands-on experience.",
        image: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Ellipse_11-1.png?v=1713362272",
    },
]

export default function SubjectExperts() {
    return (
        <>
            <section className="bg-white">
                <div className="max-w-6xl mx-auto py-20">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">
                        Meet Our Prestigious Subject Experts
                    </h2>
                    <p className="w-[90%] sm:w-[80%] lg:w-[80%] mx-auto text-black text-start sm:text-center">
                        Introducing our skilled team of subject matter experts, ready to deliver comprehensive insights and timely academic solutions.
                    </p>

                    {/* --------------- TUTORS ---------------  */}
                    <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4 py-16">

                        {data?.map((expert) => (
                            <div className="mb-0 sm:mb-10 md:mb-10 testimonial_card relative card text-center mt-14 sm:mt-0 pt-12 pb-5 px-4 rounded-3xl" >
                                <div className="absolute -top-12 flex justify-center items-center h-20  w-20  inset-0 mx-auto">
                                    <img
                                        className="mid_img h-20 w-20 object-cover"
                                        src={expert.image}
                                        alt={expert.name}
                                    />
                                </div>

                                <h2 className="mb-2 mt-0 text-lg font-semibold">{expert.name}</h2>
                                <p className="my-2 text-gray-700 text-md font-normal">{expert.degree}</p>
                                <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-0 lg:overflow-visible">
                                    <div className="inline-flex items-center">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <span key={starIndex}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="mx-0.5 w-5 h-5 text-[#FC9802] cursor-pointer"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="my-2.5">{expert.expertise}</h3>

                                <div className="mt-4 flex justify-center">
                                    <Button text="Hire Me" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

        </>
    )
}
