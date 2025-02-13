"use client"
import { sidebarLinks } from '@/constants'
import React, { useState } from 'react'
import {useAppContext} from "@/context"

const Sidebar = () => {
    const contextValues = useAppContext();
    const[activeBtn, setActiveBtn] = useState(sidebarLinks[0].id);
    const handleButton = (id: number) => {
        const newView = sidebarLinks.find(item => item.id === id);
        if (newView) {
            contextValues?.setCurrentView(newView.comp);
            setActiveBtn(id);
        }
    }
    
  return (
    <div className='w-[8%] bg-[#0f1241] text-center py-8 px-2'>
        <h2 className='text-white'>order</h2>
        <ul className='mt-20'>
            {
                sidebarLinks.map(item => {
                    const {id, name, icon} = item;
                    return(
                        <li 
                        key={id} 
                        className='mb-8'
                        >
                            <button 
                            className={`${activeBtn === id ? 'text-white':'text-red-400'} text-2xl`}
                            onClick={()=>handleButton(id)}
                            >
                                {icon}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Sidebar