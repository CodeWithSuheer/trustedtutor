import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./components.css";
import newLogo from '../../public/asset/newLogo.png';
import { APP_PHONE } from "../constants/contants";


const links = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const HeaderMobile = () => {
  const [responsiveMenu, setResponsiveMenu] = useState();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMoveToTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsDropDownOpen(false);
    setResponsiveMenu(false);
    handleMoveToTop();
  };

  const currentPath = location.pathname;

  return (
    <>
      <nav className={`]md:text-sm bg-white border-b border-gray-300`}>
        <div className="items-center px-3 max-w-full mx-auto md:flex md:px-1 lg:px-16">
          <div className="flex items-center justify-between py-1 md:py-4 md:block">
            {/* COMPANY LOGO */}
            <Link to="/" onClick={() => window.scroll(0, 0)} className="flex items-center">
              <img
                className="w-14"
                src={newLogo}
                alt="logo"
              />
              <h2 className="text-gray-800 pt-1 text-md font-semibold">
                USA Class Experts
              </h2>
            </Link>

            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md"
                onClick={() => setResponsiveMenu(!responsiveMenu)}
              >
                {responsiveMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MENU */}
          <div
            className={`flex-1 justify-self-center  pb-8 mt-8 md:block md:pb-0 md:mt-0 ${responsiveMenu ? "block" : "hidden"
              }`}
          >
            <ul className="text-center justify-center items-center space-y-8 md:flex md:space-x-6 lg:space-x-8 md:space-y-0">
              {links.map((link, index) => (
                <li key={index} className="poppins text-gray-800 hover:text-purple-700">
                  <Link
                    to={link.to}
                    onClick={handleLinkClick}
                    className="font-medium text-[0.9rem] lg:text-[1.05rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderMobile;
