import { useState, useEffect } from "react"
import { FaClock, FaPhone, FaComments, FaArrowRight, FaBars, FaTimes } from "react-icons/fa"
import newLogo from '../../public/asset/newLogo.png';
import { APP_PHONE } from "../constants/contants";
import ButtonSq from "../components/buttons/buttonSq";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`w-full ${isScrolled ? "shadow-md" : ""} transition-all duration-300`}>
      {/* Top Bar */}
      <div className="bg-white py-2">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-4 lg:mb-0">
            <img className='w-22' src={newLogo} alt="logo" />
            <div className="ml-2">
              <div className="text-orange-500 font-bold text-lg leading-tight">TRUSTED</div>
              <div className="text-gray-700 font-bold text-lg leading-tight">CLASS HELPER</div>
            </div>
          </Link>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center justify-end space-x-6 flex-1">
            {/* 24/7 Available */}
            <div className="flex items-center">
              <div className="bg-orange-500 rounded-full p-2 mr-2">
                <FaClock className="text-white" />
              </div>
              <span className="font-semibold">24/7 Available</span>
            </div>

            {/* Vertical Line */}
            <div className="h-10 w-px bg-gray-300"></div>

            {/* Call Us */}
            <div>
              <div className="text-sm text-gray-600">Call Us At</div>
              <div className="flex items-center">
                <FaPhone className="text-orange-500 mr-2 rotate-90" />
                <span className="font-semibold">{APP_PHONE}</span>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="h-10 w-px bg-gray-300"></div>

            {/* Live Chat */}
            <div className="cursor-pointer" onClick={() => { Tawk_API.toggle(); }}>
              <div className="text-sm text-gray-600">Click Here To</div>
              <div className="flex items-center">
                <FaComments className="text-orange-500 mr-2" />
                <span className="font-semibold">Start Live Chat</span>
              </div>
            </div>

            {/* Order Now Button */}
            <ButtonSq text="Order Now" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Contact Info */}
        <div className="lg:hidden container mx-auto px-4 mt-4 flex flex-col space-y-3">
          <div className="flex items-center">
            <div className="bg-orange-500 rounded-full p-2 mr-2">
              <FaClock className="text-white" />
            </div>
            <span className="font-semibold">24/7 Available</span>
          </div>

          <div className="flex items-center">
            <FaPhone className="text-orange-500 mr-2" />
            <div>
              <div className="text-sm text-gray-600">Call Us At</div>
              <span className="font-semibold">+1 (979) 216-5922</span>
            </div>
          </div>

          <div className="flex items-center">
            <FaComments className="text-orange-500 mr-2" />
            <div>
              <div className="text-sm text-gray-600">Click Here To</div>
              <span className="font-semibold">Start Live Chat</span>
            </div>
          </div>

          <a
            href="#order"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded flex items-center justify-center transition-colors"
          >
            Order Now <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-b from-[#F77827] to-[#E9A12E]">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-white font-medium block py-4 px-6"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col">
              {["HOME", "ABOUT US", "OUR SERVICES", "SUBJECTS", "CONTACT US"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white font-medium block py-3 hover:bg-orange-600 transition-colors text-[0.85rem]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
