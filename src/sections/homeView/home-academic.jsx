import React from 'react'
import Button from '../../components/buttons/Button'

const HomeAcademic = () => {
    return (
        <>
            <section className="bg-accent w-full">
                <div className="max-w-7xl mx-auto pt-2 sm:pt-8 pb-14 px-4 sm:px-0">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold  text-3xl md:text-4xl mx-auto text-dark text-center">
                        Academic Solutions We Are Expert In
                    </h2>
                    <p className="w-full mx-auto text-dark text-center text-sm sm:text-[16px]">
                        We offer unparalleled services that set us apart from the rest! Our commitment is to deliver the highest quality support while offering exclusive discounts to our
                        valued customers. If we ever fall short of our promises, we back it up with a money-back guarantee to ensure your satisfaction.
                    </p>


                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

                        {/* LEFT */}
                        <div className="flex items-center py-4 sm:py-8 border-2 border-primary-two">
                            <div className="px-2 sm:px-8 text-center">
                                <h2 className="mt-3 mb-1.5 sm:mb-5 text-2xl md:text-3xl font-bold text-dark">
                                    Online Class Help
                                </h2>
                                <p className="mb-2 text-md max-w-full text-dark font-bold">
                                    Feeling overwhelmed with your online classes?
                                </p>
                                <p className="mb-7 sm:mb-7 text-sm sm:text-[1rem] max-w-full text-dark">
                                    Managing multiple classes can be stressful, especially with
                                    tight schedules and constant deadlines. Let our experienced
                                    professionals handle your online classes, so you can focus
                                    on what matters. With Online Class Help from our experts,
                                    you can relax, knowing your academic performance is in safe
                                    hands
                                </p>

                                <div className="mt-6 flex justify-center items-center">
                                    <Button text="Order Now" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center py-8 border-2 border-light bg-gradient-to-r from-[#FFBD59] to-[#E68435]">
                            <div className="px-3 sm:px-8 text-center">
                                <h2 className="mt-3 mb-1.5 sm:mb-5 text-2xl md:text-3xl font-bold text-light">
                                    Online Course Help
                                </h2>
                                <p className="mb-1 text-md max-w-full text-light font-bold">
                                    Struggling to keep up with your online courses?
                                </p>
                                <p className="mb-7 sm:mb-7 text-sm sm:text-[1rem] max-w-full text-light">
                                    Don't let coursework stress you out. Our dedicated team is
                                    here to provide personalized support, making it easy for you to
                                    stay on top of your online courses. With expert guidance and
                                    flexible assistance, you'll be able to conquer your courses with
                                    confidence.
                                </p>

                                <div className="mt-6 flex justify-center items-center">
                                    <button
                                        onClick={() => { Tawk_API.toggle(); }}
                                        className='relative bg-light text-[#F77927] rounded-3xl px-5 py-2.5 flex items-center gap-2 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 ease-in-out cursor-pointer'
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeAcademic
