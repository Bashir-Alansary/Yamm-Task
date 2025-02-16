"use client"
import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    pages: number,
}

const Paginations = ({currentPage, setCurrentPage, pages}: Props) => {

    const handlePrevPageBtn = () => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPageBtn = () => {
        if (currentPage < pages){
            setCurrentPage(currentPage + 1);
        }
    }
    
  return (
    <div className="absolute xs:bottom-[18%] lg:bottom-0 right-0 flex items-center justify-center gap-3 mx-auto mt-8">
    <button
    className={`${currentPage === 1? "bg-[#c7a7e5]" : "bg-secondary"} size-7 flex items-center justify-center rounded-full shadow-md`}
    onClick={handlePrevPageBtn}
    disabled={currentPage === 1? true : false}
    >
        <FaChevronLeft className='text-white text-sm' />
    </button>

    <p className="text-sm font-bold">
        <span className='text-red-300'>{currentPage}</span>
        {
        pages !== 1 && 
        <>
        <span className="mx-0.25 font-semibold"> / </span>
        <span className='text-primary'>{pages}</span>
        </>
        }
    </p>

    <button
    className={`${currentPage === pages? "bg-[#c7a7e5]" : "bg-secondary"} size-7 flex items-center justify-center rounded-full shadow-md`}
    onClick={handleNextPageBtn}
    disabled={currentPage === pages? true : false}
    >
        <FaChevronRight className='text-white text-sm' />
    </button>
    </div>
  )
}

export default Paginations