"use client"
import { sidebarLinks } from '@/constants'
import React, { useState } from 'react'
import {useAppContext} from "@/context"
import Image from 'next/image'

const Sidebar = () => {
    const contextValues = useAppContext();
    const[activeBtn, setActiveBtn] = useState(sidebarLinks[1].id);
    const handleButton = (id: number) => {
        const newView = sidebarLinks.find(item => item.id === id);
        if (newView) {
            contextValues?.setCurrentView(newView.comp);
            setActiveBtn(id);
        }
    }
    
  return (
    <div className='w-[20%] bg-[#0f1241] text-center py-8 px-2'>
        <Image
        src="/images/logo.png"
        width={64}
        height={64}
        alt="logo"
        className='mx-auto'
        />
        <ul className='mt-20'>
            {
                sidebarLinks.map(item => {
                    const {id, name, icon} = item;
                    return(
                        <li 
                        key={id} 
                        className='mb-6 flex justify-center'
                        >
                            <button 
                            className={`${activeBtn === id ? 'bg-[#8662a7]':'bg-none'} w-[86%] text-white text-xl flex items-center py-3 px-8 rounded-md transition-all duration-500`}
                            onClick={()=>handleButton(id)}
                            >
                                <span className='mr-8'>{icon}</span>
                                <span>{name}</span>
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