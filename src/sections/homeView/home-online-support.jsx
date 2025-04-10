"use client"
import { FaArrowRight } from "react-icons/fa"
import { BsTelephoneFill } from "react-icons/bs"
import { BsSquareFill } from "react-icons/bs"
import ButtonSq from "../../components/buttons/buttonSq"
import { APP_PHONE } from "../../constants/contants"

export default function HomeOnlineSupport() {
    return (
        <div className="bg-secondary pt-16 pb-14 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-4">
                    <div className="md:col-span-8">
                        <h2 className="text-3xl font-bold mb-2 leading-tight">
                            Get Personalized Support For Your <span className="text-orange-500">Online Class</span>
                            <br />
                            And <span className="text-orange-500">Courses</span>
                        </h2>

                        <p className="text-md mb-6 leading-normal max-w-2xl">
                            Are you feeling overwhelmed by upcoming assignments, online coursework, or critical exams? Allow our
                            expert consultants from the world's leading universities to handle your academic challenges and help you
                            secure the grades you've always wanted.
                        </p>
                    </div>

                    <div className="md:col-span-4 space-y-5 max-w-sm">
                        <div className="flex items-start">
                            <div className="mt-1 mr-2 text-orange-500 flex-shrink-0">
                                <div className="relative">
                                    <BsSquareFill className="text-orange-500 text-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                                        ✓
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">In-Depth Research and Content Creation</h3>
                                <p className="text-sm">Provide thorough research and create well-structured, high-quality content.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="mt-1 mr-2 text-orange-500 flex-shrink-0">
                                <div className="relative">
                                    <BsSquareFill className="text-orange-500 text-lg" />
                                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                                        ✓
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Expert Proofreading</h3>
                                <p className="text-sm">Our skilled editors ensure your work is polished, accurate, and clear.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center items-center mt-8">
                    <div className="flex items-center gap-4 flex-col sm:flex-row">
                        <ButtonSq text="Order Now" />

                        <div className="flex items-center gap-2">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-orange-500" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.33 19.035a2.57 2.57 0 0 1-.884 1.432a5.25 5.25 0 0 1-3.738 1.564h-.325a11 11 0 0 1-4.205-1.087h-.01c-.305-.142-.62-.284-.925-.457a19 19 0 0 1-4.185-3.18a18.2 18.2 0 0 1-3.9-5.292A11.7 11.7 0 0 1 2.14 8.572a6.4 6.4 0 0 1 .407-3.708a6.8 6.8 0 0 1 1.148-1.432A2.2 2.2 0 0 1 5.29 2.69a2.5 2.5 0 0 1 1.687.935c.457.497 1.015 1.015 1.473 1.493l.63.62c.37.328.599.786.64 1.28c0 .453-.167.89-.468 1.229a9 9 0 0 1-.62.68l-.203.213c-.118.11-.208.246-.264.397q-.075.223-.06.457c.161.431.414.823.74 1.148c.509.69 1.017 1.29 1.535 1.94a12.9 12.9 0 0 0 3.29 2.733c.127.093.273.155.428.182c.134.01.27-.01.396-.06c.355-.209.67-.477.934-.793a2.17 2.17 0 0 1 1.422-.782a2.03 2.03 0 0 1 1.423.61c.203.172.426.406.64.63l.304.314l.315.305l.539.548q.482.428.904.915c.282.39.409.872.355 1.35m-3.646-6.958a.77.77 0 0 1-.762-.762a4.37 4.37 0 0 0-4.378-4.378a.762.762 0 0 1 0-1.524a5.893 5.893 0 0 1 5.902 5.902a.76.76 0 0 1-.762.762" /><path fill="currentColor" d="M21.209 11.72a.77.77 0 0 1-.762-.761a7.455 7.455 0 0 0-7.456-7.467a.762.762 0 1 1 0-1.523a8.98 8.98 0 0 1 8.98 8.99a.76.76 0 0 1-.762.762" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-700">Call Us At</span>
                                <div className="flex items-center">
                                    <span className="font-medium text-md">{APP_PHONE}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
