import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ text = "Lets Chats" }) => {
    return (
        <>
            <button
                onClick={() => { Tawk_API.toggle(); }}
                className='relative bg-gradient-to-r from-indigo-500 to-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-500 text-white rounded-3xl px-5 py-2.5 flex items-center gap-2 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 ease-in-out'
            >
                <LuMessagesSquare /> {text}
            </button>
        </>
    )
}

export default Button
