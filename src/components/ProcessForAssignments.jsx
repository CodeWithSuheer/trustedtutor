import React from 'react'

const ProcessForAssignments = () => {

    const steps = [
        { id: 2, text: 'Get a Price Quote', icon: 'file-text' },
        { id: 3, text: 'Make Payment', icon: 'dollar-sign' },
        { id: 4, text: 'Get Your Work Done', icon: 'check' }
    ];


    return (
        <>
            <section className='bg-[#F4F8FE]'>
                <div className="max-w-7xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">How It Works</h2>
                    <p className='w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center'>To take advantage of our academic writing services, simply follow these steps:</p>

                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 sm:px-8 px-4">

                        {/* DETAIL BOXES */}
                        <div className="space-y-4">

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden" open>
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/docs.png?v=1736098130" alt="" /></span>
                                        Step 1: Submit Your Requirements
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        01
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Share vital details—such as your assignment topic, academic level, deadline, formatting style, and any specific guidelines. The more information you give, the better we can tailor our assistance.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/electricity-bill.png?v=1736098130" alt="" /></span>
                                        Step 2: Receive a Personalized Quote
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        02
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    We'll review your information and generate a clear, no-obligation quote. Once you're satisfied, choose a secure payment option that suits you best.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/cash-payment.png?v=1736098130" alt="" /></span>
                                        Step 3: Expert in Action
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        03
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    We match your project with a subject specialist who will craft a high-quality, original piece aligned with your professor's standards and academic expectations.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/checked.png?v=1736098130" alt="" /></span>
                                        Step 4: Review & Request Revisions
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        04
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    You'll receive your completed assignment before the deadline. Carefully review it and request any modifications needed—we provide unlimited revisions until you're completely pleased.
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

export default ProcessForAssignments