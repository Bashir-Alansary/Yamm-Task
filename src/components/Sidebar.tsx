"use client"
import { sidebarLinks } from '@/constants'
import React, { useState } from 'react'
import {useAppContext} from "@/context"
import Image from 'next/image'
import Link from 'next/link'
import { IoChevronBackCircle } from "react-icons/io5";

const Sidebar = () => {
    const contextValues = useAppContext();
    const[activeBtn, setActiveBtn] = useState(sidebarLinks[1].id);
    const handleButton = (id: number) => {
        const newView = sidebarLinks.find(item => item.id === id);
        if (newView) {
            contextValues?.setCurrentView(newView.comp);
            setActiveBtn(id);
            contextValues?.closeSidebar();
        }
    }
    
  return (
    <div className={`xs:fixed xs:top-0 ${contextValues?.viewSidbar? 'xs:left-0' : 'xs:-left-full'} max-h-screen overflow-y-auto xl:relative xl:top-0 xl:left-0 xs:w-20 xl:w-[20%] bg-[#0f1241] text-center py-8 px-2 z-50 transition-all duration-500`}>
        <Image
        src="/images/logo.png"
        width={64}
        height={64}
        alt="logo"
        className='xs:hidden xl:block xl:mx-auto'
        />
        <button 
        className='xs:block xs:text-4xl xs:text-white xs:mx-auto xl:hidden'
        onClick={contextValues?.closeSidebar}
        >
            <IoChevronBackCircle />
        </button>
        <ul className='mt-20'>
            {
                sidebarLinks.map(item => {
                    const {id, name, icon} = item;
                    return(
                        <li 
                        key={id} 
                        className='mb-6 flex justify-center'
                        >
                            <Link
                            href="/" 
                            className={`${activeBtn === id ? 'xs:text-[#8662a7] xs:bg-white xl:bg-[#8662a7] xl:text-white ':'xs:text-white bg-none'} xs:w-fit xl:w-[86%] text-white flex items-center py-3 xs:px-3 xl:px-5 rounded-lg transition-all duration-500`}
                            onClick={()=>handleButton(id)}
                            >
                                <span className='xl:mr-8 text-2xl'>{icon}</span>
                                <span className='xs:hidden xl:block xl:text-lg'>{name}</span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Sidebar