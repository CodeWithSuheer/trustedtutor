import Marquee from 'react-fast-marquee';

const LogoGrid = () => {
    const Institutions = [
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_4.png?v=1713358377",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_5.png?v=1713358380",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_8.png?v=1713358378",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_9.png?v=1713358378",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_10.png?v=1713358380",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_7.png?v=1713358380",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/image_6.png?v=1713358377",
        },
    ]

    return (
        <div className="pt-8 pb-12 w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* --------------- HEADER TEXT ---------------  */}
                <h2 className="mb-3 font-bold  text-3xl md:text-4xl mx-auto text-dark text-center">
                    Our Experts Come From <span className='text-primary-one'>Top-Rated Universities</span>
                </h2>


                {/* --------------- LOGO GRID ---------------  */}
                <div className="mt-12">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                        <Marquee
                            direction='left'
                            gradient
                            gradientWidth={150}
                            className='testimonial_marquee mt-5'>

                            {Institutions?.map((data, index) => (
                                <li key={index}>
                                    <img className="w-[6.5rem] mx-6 sm:mx-10" src={data.img} alt="" />
                                </li>
                            ))}
                        </Marquee>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LogoGrid
