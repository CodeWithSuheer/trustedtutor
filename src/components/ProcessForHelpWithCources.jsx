import React from 'react'

const ProcessForHelpWithCources = () => {
    return (
        <>
            <section className='bg-[#F4F8FE]'>
                <div className="max-w-7xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">The Process We Follow</h2>
                    <p className='w-[90%] sm:w-[84%] lg:w-[50%] mx-auto text-black text-center'>Harness our academic assistance with just a few straightforward steps:</p>

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
                                    Share essential course details—subject, topic, level, deadlines, and special instructions—so we can craft a personalized game plan.
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
                                    After reviewing your requirements, we’ll send a transparent, no-obligation quote. No surprises or hidden fees.
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
                                    Choose the secure payment option that fits you best. Once confirmed, our experts begin working right away.
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
                                    Our professionals manage your online course tasks—including lectures, assignments, and discussions—with precision and punctuality. Review the final outputs and request revisions if needed.
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

export default ProcessForHelpWithCources
