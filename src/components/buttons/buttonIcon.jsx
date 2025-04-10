import React from 'react'
import { HiArrowRight } from 'react-icons/hi';

const ButtonIcon = ({ text = "Order Now" }) => {
    return (
        <>
            <button
                onClick={() => { Tawk_API.toggle(); }}
                className='relative bg-gradient-to-r from-[#F77927] to-[#E8A12E] hover:bg-gradient-to-r hover:from-[#E8A12E] hover:to-[#F77927] text-white rounded-full px-5 py-2.5 flex justify-center items-center gap-2 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 ease-in-out cursor-pointer'
            >
                {text} <HiArrowRight />
            </button>
        </>
    )
}

export default ButtonIcon
