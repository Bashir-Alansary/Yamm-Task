"use client"
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    pages: number,
    pageLength: number,
}

const Paginations = ({currentPage, setCurrentPage, pages, pageLength}: Props) => {

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
    <div className="absolute bottom-0 right-0 flex items-center justify-center gap-3 mx-auto mt-8">
    <button
    className={`${currentPage === 1? "bg-gray-100" : "bg-gray-50"}`}
    onClick={handlePrevPageBtn}
    >
        <FaChevronLeft />
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
    className={`${currentPage === pages? "bg-gray-100" : "bg-gray-50"}`}
    onClick={handleNextPageBtn}
    >
        <FaChevronRight />
    </button>
    </div>
  )
}

export default Paginations