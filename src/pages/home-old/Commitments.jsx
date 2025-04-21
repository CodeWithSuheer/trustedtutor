const Commitments = () => {
    return (
        <>
            <section className='bg-white'>
                <div className="max-w-7xl mx-auto py-20">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Our Commitments</h2>
                    <p className='w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center'>Our dedicated team of online assignment helpers and subject specialists aims to ensure your academic triumph through various means.</p>



                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-5 sm:px-8 px-4">

                        {/* CARD 1 */}
                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/notes.png?v=1736099197" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">Delivering Strategic Solutions</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">Receive effective solutions crafted to help you finalize your assignments or exams on time—reducing stress while meeting deadlines.</p>
                        </div>
                        {/* CARD 2 */}
                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/guidance.png?v=1736099196" alt="" />
                            <h3 className="mb-2 font-semibold text-md text-black group-hover:text-white">Experienced Subject Specialists</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">We meticulously screen our experts to guarantee credibility and expertise. Trust us with your exams and papers, knowing they're in capable hands.</p>
                        </div>
                        {/* CARD 3 */}
                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/headset.png?v=1736099196" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">24/7 Assistance</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">Whether it's late at night or first thing in the morning, we're always around to address your needs and ensure you stay on track.</p>
                        </div>
                        {/* CARD 4 */}
                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-3 mt-1 size-10' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/content-plan.png?v=1736099196" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">Non-Plagiarized Content</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">Our content is 100% original. Each topic is researched thoroughly to maintain uniqueness, so you can be confident in the authenticity of your work..</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Commitments
