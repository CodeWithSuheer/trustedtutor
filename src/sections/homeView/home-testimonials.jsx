import { BiSolidQuoteAltRight } from "react-icons/bi"
import { FaQuoteRight } from "react-icons/fa"

export default function HomeTestimonials() {
    return (
        <div className="bg-secondary py-12 px-4 w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="mb-1 font-bold text-3xl md:text-4xl mx-auto text-dark text-center">
                    Testimonials
                </h2>

                {/* Quote Icon */}
                <div className="flex justify-center mb-16 sm:mb-6">
                    <BiSolidQuoteAltRight size={60} className="text-orange-400" />
                </div>

                {/* Testimonials Cards */}
                <div className="flex flex-col md:flex-row gap-12 sm:gap-8">
                    {/* Testimonial 1 */}
                    <div className="relative bg-white p-4 rounded-lg flex-1 flex flex-col items-center text-center">
                        <div className="img absolute top-0 left-0 right-0 flex justify-center -mt-10">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img08.png?v=1738005936"
                                alt="Student 2"
                                className="w-20 h-20 rounded-full object-cover mb-4"
                            />
                        </div>

                        <div className="content pt-14 pb-5 px-4">
                            <p className="mb-4">
                                <span className="text-gray-800">" Highly effective and trustworthy service! "</span>
                                <br />I was drowning in assignments, but TrustedClassTutors took the pressure off. Now, I can focus on my job and still pass my classes.
                            </p>
                            <div className="mt-auto">
                                <p className="font-semibold">Student ID:</p>
                                <p className="text-gray-600">Emily R. (Order #12345)</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="relative bg-white p-4 rounded-lg flex-1 flex flex-col items-center justify-center text-center">
                        <div className="img absolute top-0 left-0 right-0 flex justify-center -mt-10">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/img02.png?v=1738005936"
                                alt="Student 2"
                                className="w-20 h-20 rounded-full object-cover mb-4"
                            />
                        </div>

                        <div className="content pt-14 pb-5 px-4">
                            <p className="mb-4">
                                <span className="text-gray-800">" Academic success made easy! "</span>
                                <br />My tutor understood exactly what I needed and helped me grasp tough concepts. It felt like having a personal coach.
                            </p>
                            <div className="mt-auto">
                                <p className="font-semibold">Student ID:</p>
                                <p className="text-gray-600">Jake L. (Order #13579)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
