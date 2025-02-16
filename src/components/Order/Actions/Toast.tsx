import React from 'react'
import { IoMdClose, IoMdNotifications } from "react-icons/io";

const Toast = ({setShowToast}: {setShowToast: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div 
    role="alert" 
    className=" absolute -top-16 left-5 shadow-md shadow-blue rounded-xl border-2 border-gray-200 bg-white p-4"
    >
        <div className="flex items-center gap-4">
            <span className="text-green-600 text-lg animate-bounce">
                <IoMdNotifications />
            </span>
            <span className="font-medium text-gray-900"> Changes saved </span>
            <button 
            className="text-gray-500 transition hover:text-gray-600"
            onClick={()=>setShowToast(false)}
            >
                <IoMdClose />
            </button>
        </div>
    </div>
  )
}

export default Toast