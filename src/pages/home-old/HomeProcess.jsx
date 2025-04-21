import React from 'react'

const HomeProcess = () => {

    const steps = [
        { id: 2, text: 'Get a Price Quote', icon: 'file-text' },
        { id: 3, text: 'Make Payment', icon: 'dollar-sign' },
        { id: 4, text: 'Get Your Work Done', icon: 'check' }
    ];


    return (
        <>
            <section className='bg-surfacev2'>
                <div className="max-w-7xl mx-auto py-14">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">The Process We Follow</h2>
                    <p className='w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center'>In order to avail of our academic writing services, you have to follow the simplest procedure mentioned below</p>

                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 sm:px-8 px-4">

                        {/* DETAIL BOXES */}
                        <div className="space-y-4">

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden" open>
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/docs.png?v=1736098130" alt="" /></span>
                                        Step 1: Provide Task Details
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        01
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Start by sharing the key information about your assignment, exam, or online class support. This includes the subject, topic, academic level, deadline, and any specific instructions. The more detail you provide, the easier it is for us to customize our services.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/electricity-bill.png?v=1736098130" alt="" /></span>
                                        Step 2: Receive a Quote
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        02
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Once we have your requirements, we'll give you a clear and upfront price quote. Our transparent pricing ensures there are no surprise charges or hidden fees.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/cash-payment.png?v=1736098130" alt="" /></span>
                                        Step 3: Make Payment
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        03
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Review your quote, then select the secure payment method that suits you best. We offer multiple online options to make the transaction quick and hassle-free.
                                </p>
                            </details>

                            <details className="group rounded-2xl bg-white border border-purple-800 [&_summary::-webkit-details-marker]:hidden">
                                {/* HEADER */}
                                <summary className="flex px-3 py-3 cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 className="text-lg font-medium flex items-center pl-3">
                                        <span><img className='size-10 mr-3' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/checked.png?v=1736098130" alt="" /></span>
                                        Step 4: Get Your Project Done
                                    </h2>

                                    <span className="ml-auto bg-button text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                        04
                                    </span>
                                </summary>

                                {/* TEXT */}
                                <p className="mt-1 px-4 pb-4 leading-relaxed text-gray-700">
                                    Our experts will begin working on your project promptly, focusing on both quality and punctuality. After completion, you'll receive the final version and can request revisions if needed.
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

export default HomeProcess