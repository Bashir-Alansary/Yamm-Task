import React from 'react'
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className='h-20 bg-blue-500 mb-8'>
        <form>
            <div className='bg-white h-12 flex'>
                <span className='h-full flex items-center px-5'><IoSearch /></span>
                <input type='text' placeholder='search something' className='h-full'/>
            </div>
        </form>
    </div>
  )
}

export default Header