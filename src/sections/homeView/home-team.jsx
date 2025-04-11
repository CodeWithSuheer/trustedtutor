import React from 'react'
import { FaUserGraduate, FaMedal, FaSmile } from "react-icons/fa"

const HomeTeam = () => {

    return (
        <>
            <section className="home_team w-full">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-0">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold  text-3xl md:text-4xl mx-auto text-light text-center">
                        We Are Team Of PHDs Professionals Trusted By USA Students
                    </h2>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {/* Stat box 1 */}
                        <div className="bg-white/0 bg-opacity-90 rounded-lg px-4 py-4 border-2 border-white flex flex-col items-center justify-center">
                            <div className="flex items-center">
                                <span className="text-4xl font-bold text-white">99.9%</span>
                                <FaSmile className="ml-2 text-2xl text-amber-500" />
                            </div>
                            <p className="text-sm font-medium mt-2 text-white">Student Satisfaction</p>
                        </div>

                        {/* Stat box 2 */}
                        <div className="bg-white/0 bg-opacity-90 rounded-lg px-4 py-4 border-2 border-white flex flex-col items-center justify-center">
                            <div className="flex items-center">
                                <span className="text-4xl font-bold text-white">5000</span>
                                <FaUserGraduate className="ml-2 text-2xl text-amber-500" />
                            </div>
                            <p className="text-sm font-medium mt-2 text-white">Students</p>
                        </div>

                        {/* Stat box 3 */}
                        <div className="bg-white/0 bg-opacity-90 rounded-lg px-4 py-4 border-2 border-white flex flex-col items-center justify-center">
                            <div className="flex items-center">
                                <span className="text-4xl font-bold text-white">10+</span>
                                <FaMedal className="ml-2 text-2xl text-amber-500" />
                            </div>
                            <p className="text-sm font-medium mt-2 text-white">Years Of Expertise</p>
                        </div>

                        {/* Stat box 4 */}
                        <div className="bg-white/0 bg-opacity-90 rounded-lg px-4 py-4 border-2 border-white flex flex-col items-center justify-center">
                            <div className="flex items-center">
                                <span className="text-4xl font-bold text-white">100+</span>
                                <FaUserGraduate className="ml-2 text-2xl text-amber-500" />
                            </div>
                            <p className="text-sm font-medium mt-2 text-white">PHDs Experts</p>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default HomeTeam
