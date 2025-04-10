import React, { useState } from 'react'
import toast from 'react-hot-toast';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { IoArrowForward } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const EmailFormForHome = () => {
    const [loading, setLoading] = useState(false);

    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        phone: "",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formdata.name) {
            toast.error('Please enter your name');
            return;
        }
        if (!formdata.email) {
            toast.error('Please enter your email Address');
            return;
        }
        if (!formdata.phone) {
            toast.error('Please enter your phone number');
            return;
        }

        setLoading(true)
        try {
            await emailjs.send(
                'service_kz9gvz9',
                'template_cloitth',
                {
                    name: formdata.name,
                    phone: formdata.phone,
                    email: formdata.email,
                },
                {
                    publicKey: 't0EeVaqktn9dKzRfx',
                },
            );

            reset();
            setLoading(false)
            toast.success("Query sent! We'll reach out shortly.");
            console.log('SUCCESS!');

        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
                console.log('EMAILJS FAILED...', err);
                return;
            }
            setLoading(false)
            console.log('ERROR', err);
        }
    };

    const reset = () => {
        setFormdata({
            name: "",
            email: "",
            phone: "",
        });
    }

    return (
        <>
            <div className="w-full text-center bg-white text-black rounded-md shadow-xl p-2">

                <div className="flex">
                    <div className="bg-[#BC673B] border-r border-light text-white font-semibold rounded-tl-md py-3 px-4 w-1/4 flex items-center justify-center">
                        <span className="text-lg sm:text-xl">
                            25%
                            <br />
                            OFF
                        </span>
                    </div>
                    <div className="bg-[#BC673B] text-white font-semibold py-3 px-4 w-3/4 rounded-tr-md flex items-center justify-center">
                        <span className="text-lg sm:text-xl text-center max-w-[20rem]">
                            Get Instant Academic Support
                        </span>
                    </div>
                </div>

                {/* Subheader */}
                <div className="bg-gray-900 text-white text-center py-3 w-full px-4 text-sm">
                    <p className='max-w-sm mx-auto text-orange-100 text-[15px]'>
                        Reach out today for premium assistance at an affordable price!
                    </p>
                </div>

                <div className="content px-3 sm:px-3 mt-6 pb-3">

                    {/* FIELDS */}
                    <div className="mb-4 fields grid grid-cols-1 gap-2 lg:grid-cols-1 lg:gap-2">
                        <div className="mb-2">
                            <input
                                id="name"
                                type="name"
                                onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
                                value={formdata.name}
                                className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-md block w-full p-3" placeholder="Enter Your Name" required />
                        </div>

                        <div className="mb-2">
                            <input
                                id="email"
                                type="email"
                                onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
                                value={formdata.email}
                                className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-md block w-full p-3" placeholder="Enter Your Email" required />
                        </div>

                        <div className="mb-2">
                            <input
                                id="phone"
                                type="number"
                                value={formdata.phone}
                                onChange={(e) => setFormdata({ ...formdata, phone: e.target.value })}
                                className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-md block w-full p-3" placeholder="Phone Number" required />
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`${loading ? "cursor-not-allowed" : ""} flex justify-center gap-x-1 items-center bg-button text-white bg-[#BC673B] font-medium rounded-md w-full text-md px-5 py-4 cursor-pointer`}
                    >
                        {loading ? (<>Submitting...</>) : (<>CLAIM THIS DISCOUNT</>)}
                    </button>
                </div>
            </div>
        </>
    )
}

export default EmailFormForHome
