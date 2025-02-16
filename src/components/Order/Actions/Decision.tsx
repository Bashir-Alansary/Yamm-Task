"use client"
import { decisionItems } from '@/constants';
import { DecisionItemType } from '@/types';
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

const Decision = ({setShowToast}: {setShowToast: React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [decisionVal, setDecisionVal] = useState<string>("decision");
    
    const handleToggleBtn = (): void => {
      setShowMenu(!showMenu);
    }

    const handleItemBtn = (val: string): void => {
        setDecisionVal(val);
        setShowMenu(false);
        setShowToast(true);
      }

  return (
    <div className="relative min-w-[118px]">
        <button 
        className="inline-flex justify-between items-center w-full overfloden rounded-md border bg-white p-[0.65rem] text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        onClick={handleToggleBtn}
        >
        <span className="pr-3 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700">
            {decisionVal}
        </span>
        <span className="pl-3 border-s"><FaChevronDown className={`${showMenu? 'rotate-180':'rotate-0'} transition-all duration-500`} /></span>
        </button>

        <div
            className={`${showMenu ? "max-h-[290px]" : "max-h-0"} absolute overflow-hidden end-0 z-10 mt-2 w-full rounded-md bg-white shadow-lg transition-all duration-500`}
            role="menu"
            >
            {
            decisionItems.map((item:DecisionItemType)=> {
                const{id, name, value} = item;
                return (
                    <button
                    key={id}
                    className="block w-full text-left px-4 py-1 text-sm text-gray-500 hover:bg-[#ac91dd] hover:text-white hover:pl-5 transition-all duration-500"
                    onClick={()=>handleItemBtn(value)}
                    role="menuitem"
                    >
                        {name}
                    </button>
                )
            })
            }
        </div>
    </div>
  )
}

export default Decision