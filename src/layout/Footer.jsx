import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import newLogo from '../../public/asset/newLogo.png';
import { APP_EMAIL, APP_NAME, APP_PHONE } from "../constants/contants";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    const handleMoveToTop = () => {
        window.scroll(0, 0);
    };

    const getCurrentYear = () => new Date().getFullYear();

    return (
        <>
            <footer className="relative w-full home_footer text-light">

                <div className="absolute -top-24 sm:-top-16 right-0 left-0 z-10 flex justify-center px-4">
                    <div className="bg-[#DB5400] rounded-2xl sm:rounded-full py-6 sm:py-10 px-4 md:px-16 flex flex-col md:flex-row items-start justify-between w-full max-w-5xl">
                        <a href="#contact" className="bg-light text-black px-8 py-3 rounded-full font-bold mb-4 md:mb-0">
                            Contact Now
                        </a>

                        <div className="hidden md:block w-px h-12 bg-white/30"></div>

                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="bg-light p-2 rounded-full mr-3">
                                <FaEnvelope className="text-orange-600 text-md sm:text-xl" />
                            </div>
                            <div>
                                <div className="text-light text-sm sm:text-[1rem] font-bold">Email</div>
                                <div className="text-light text-sm sm:text-[1rem]">{APP_EMAIL}</div>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-white/30"></div>

                        <div className="flex items-center">
                            <div className="bg-light p-2 rounded-full mr-3">
                                <FaPhone className="text-orange-600 text-md sm:text-xl" />
                            </div>
                            <div>
                                <div className="text-light text-sm sm:text-[1rem] font-bold">Phone</div>
                                <div className="text-light text-sm sm:text-[1rem]">{APP_PHONE}</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative max-w-7xl mx-auto">
                    <div className="pt-36 pb-14 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                        {/* LOGO & HEADING */}
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg flex items-center text-xl font-semibold tracking-tight text-light xl:text-2xl">
                                <img className='-ml-3 w-12' src={newLogo} alt="logo" />
                                {APP_NAME}
                            </h1>
                            <p className="max-w-md text-[1rem] mt-3">
                                We offer unparalleled services that set us
                                apart from the rest! Our commitment is to
                                deliver the highest quality support while
                                offering exclusive discounts to our valued
                                customers.
                            </p>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <p className="text-xl font-semibold text-light">Quick Links</p>
                            <ul className="mt-3 space-y-2">
                                {[
                                    { label: "Home", to: "/" },
                                    { label: "About Us", to: "/about" },
                                    { label: "Contact Us", to: "/contact" },
                                ].map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            onClick={handleMoveToTop}
                                            className="text-light hover:text-orange-200 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-xl font-semibold text-light">Usefull Links</p>
                            <ul className="mt-3 space-y-2">
                                {[
                                    { label: "Privacy Policy", to: "/privacy-policy" },
                                ].map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            onClick={handleMoveToTop}
                                            className="text-light hover:text-orange-200 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="cursor-pointer" onClick={() => { Tawk_API.toggle(); }}>
                                    Chat Now
                                </li>
                            </ul>
                        </div>


                        {/* Contact Info */}
                        <div>
                            <p className="text-xl font-semibold text-light">
                                Contact Info
                            </p>
                            <div className="flex flex-col items-start mt-3 space-y-2">
                                {/* PHONE NUMBER */}
                                <a href="tel:+1-352-771-6234" className="flex items-center gap-2">
                                    <FaPhone /> {APP_PHONE}
                                </a>
                                <a href="mailto:trustedclasshelper@gmail.com" className="flex items-center gap-2">
                                    <MdEmail /> {APP_EMAIL}
                                </a>

                                {/* SOCIAL LINKS */}
                                {/* <div className="links pt-2 flex items-center justify-start gap-2.5">
                                    <a href="https://www.facebook.com/StudyHelpers" target="_blank" className=""><FaFacebookF className="text-light bg-button h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaInstagram className="text-light bg-button h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaLinkedinIn className="text-light bg-button h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaTiktok className="text-light bg-button h-7 w-7 p-1.5 rounded-full" /></a>
                                </div> */}

                                {/* PAYMENT METHODS */}
                                <div className="paymentMethods pt-2 flex items-center justify-start gap-2">
                                    <img className="w-8" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Paypal_logo.png?v=1713217299" alt="" />
                                    <img className="w-8" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/MasterCard_Logo_svg.png?v=1713215530" alt="" />
                                    <img className="w-8" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/visa.png?v=1713215529" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER BOTTOM PART  */}
                <div className="text-sm py-7 px-4 md:px-10 border-t bg-surface text-center text-light">
                    <p>Copyrights © {getCurrentYear()} All Rights Reserved by The Trusted Class Tutors</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
