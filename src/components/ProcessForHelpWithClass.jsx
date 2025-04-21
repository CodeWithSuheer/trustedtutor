import React from 'react'

const ProcessForHelpWithClass = () => {
    return (
        <>
            <section className='bg-[#F4F8FE]'>
                <div className="max-w-7xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">The Process We Follow</h2>
                    <p className='w-[90%] sm:w-[84%] lg:w-[50%] mx-auto text-black text-center'>Accessing our academic support services is straightforward. Just follow these simple steps:</p>

                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 sm:px-8 px-4">

                        {/* DETAIL BOXES */}
                        <div className="space-y-4">

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden" open>
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/docs.png?v=1736098130" alt="" /></span>
                                        Provide Order Details
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        01
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Share the key info about your assignment, exam, or online class request—such as subject, topic, academic level, deadline, and any special requirements—so we can tailor our assistance precisely.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/electricity-bill.png?v=1736098130" alt="" /></span>
                                        Get a Price Quote
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        02
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Once we receive your details, we’ll provide a transparent quote. We believe in fairness, so there are no hidden fees or extra charges.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/cash-payment.png?v=1736098130" alt="" /></span>
                                        Make Payment
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        03
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    After reviewing the quote, pick the payment method most convenient for you. Our secure online options ensure a smooth transaction.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/checked.png?v=1736098130" alt="" /></span>
                                        Get Your Work Done
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        04
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Our experts will start working right away, focusing on quality and punctuality. When we’re finished, you’ll receive the final draft, and you’re welcome to request any necessary revisions.
                                </p>
                            </details>

                        </div>

                        {/* IMAGE */}
                        <div className="right_image mt-5 sm:mt-0 px-3 md:px-40 lg:px-10 xl:px-20 mx-auto">
                            <img className="object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/0f7ed711-c81d-43d1-8a88-781f70a55fb5.png?v=1736073070" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProcessForHelpWithClass