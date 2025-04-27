import { BiSolidQuoteAltRight } from "react-icons/bi"
import Marquee from "react-fast-marquee";

const data = [
    {
        review: "I was drowning in assignments, but USA Class Experts took the pressure off. Now, I can focus on my job and still pass my classes.",
        name: "Emily R.",
        studentId: "Order #12345",
        img: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 5,
    },
    {
        review: "My GPA went from a 2.5 to a 3.8 after using USA Class Experts. Their experts really know their stuff!",
        name: "Liam T.",
        studentId: "Order #67890",
        img: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
    },
    {
        review: "I was worried about my info getting out, but USA Class Experts kept everything 100% confidential. I felt safe using their service.",
        name: "Sarah M.",
        studentId: "Order #24680",
        img: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 5,
    },
    {
        review: "My tutor understood exactly what I needed and helped me grasp tough concepts. It felt like having a personal coach.",
        name: "Jake L.",
        studentId: "Order #13579",
        img: "https://randomuser.me/api/portraits/men/24.jpg",
        rating: 5,
    },
    {
        review: "They delivered my assignments on time, every time. No more late penalties!",
        name: "Olivia P.",
        studentId: "Order #97531",
        img: "https://randomuser.me/api/portraits/women/25.jpg",
        rating: 5,
    },
    {
        review: "The expert assigned to my course was a pro in the field. I learned so much just from their feedback!",
        name: "Noah K.",
        studentId: "Order #86420",
        img: "https://randomuser.me/api/portraits/men/26.jpg",
        rating: 5,
    },
    {
        review: "I thought it would be expensive, but USA Class Experts offered great rates. Worth every penny for the peace of mind!",
        name: "Ava S.",
        studentId: "Order #31415",
        img: "https://randomuser.me/api/portraits/women/27.jpg",
        rating: 5,
    },
    {
        review: "Signing up was a breeze, and the dashboard is super easy to navigate. No tech headaches!",
        name: "Ethan W.",
        studentId: "Order #27182",
        img: "https://randomuser.me/api/portraits/men/28.jpg",
        rating: 5,
    },
    {
        review: "I had a question at 2 a.m., and their team responded within minutes. Amazing service!",
        name: "Mia D.",
        studentId: "Order #16180",
        img: "https://randomuser.me/api/portraits/women/29.jpg",
        rating: 5,
    },
    {
        review: "USA Class Experts saved my semester. I couldn't have done it without them. Highly recommend!",
        name: "Lucas B.",
        studentId: "Order #11235",
        img: "https://randomuser.me/api/portraits/men/30.jpg",
        rating: 5,
    },
];

export default function HomeTestimonials() {
    return (
        <div className="bg-secondary py-12 w-full">
            <div className="max-w-full mx-auto">
                <h2 className="mb-1 font-bold text-3xl md:text-4xl mx-auto text-dark text-center px-4">
                    Testimonials
                </h2>

                {/* Quote Icon */}
                <div className="flex justify-center mb-16 sm:mb-6">
                    <BiSolidQuoteAltRight size={60} className="text-orange-400" />
                </div>

                <Marquee direction="left" className="relative testimonial_marquee overflow-visible mt-10">
                    {data.map((data, i) => (
                        <div key={i} className="pt-10">
                            <div className="mx-10 relative bg-white p-4 max-w-lg rounded-lg flex-1 overflow-visible flex flex-col px-6 items-center text-center">
                                <div className="img absolute top-0 left-0 right-0 flex justify-center -mt-10">
                                    <img
                                        src={data?.img}
                                        alt="img"
                                        className="w-20 h-20 rounded-full object-cover mb-4"
                                    />
                                </div>

                                <div className="content pt-14 pb-5 px-4">
                                    <p className="mb-4">
                                        {data?.review}
                                    </p>
                                    <div className="mt-auto">
                                        <p className="font-semibold">Student ID:</p>
                                        <p className="text-gray-600">{data?.name} ({data?.studentId})</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}
