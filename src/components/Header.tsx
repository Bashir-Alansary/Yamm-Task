import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCog } from "react-icons/fa";
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex justify-between items-center mb-8'>
        <form>
            <div className='w-fit h-12'>
                <input type='text' placeholder='search something' className='h-full w-96 px-7 rounded-md bg-white shadow-md'/>
            </div>
        </form>
        <div className='flex items-center'>
          <button className='size-14 text-xl bg-white flex items-center justify-center shadow-md rounded-md'>
            <IoIosNotificationsOutline />
          </button>
          <button className='size-14 text-xl bg-white flex items-center justify-center shadow-md rounded-md ml-4'>
            <FaCog />
          </button>
          <Image
            src="/images/user.jpg"
            width={64}
            height={64}
            alt="profile"
            className=' ml-9 bg-white p-2 rounded-full shadow-md'
          />
        </div>
    </div>
  )
}

export default Header