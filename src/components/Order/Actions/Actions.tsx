"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import ActiveBtn from './ActiveBtn';
import Decision from './Decision';
import Toast from './Toast';

const Actions = ({id}: {id: string}) => {

  const [showToast, setShowToast] = useState<boolean>(false);

  setTimeout(()=>{
    if (showToast) {
      setShowToast(false);
    }
  }, 2000)

  return (
    <div className='flex items-center justify-between'>
        <div className='relative'>
          {showToast && <Toast setShowToast={setShowToast} />}
          <div className='flex'>
              <Decision setShowToast={setShowToast} />
              <ActiveBtn setShowToast={setShowToast}/>
          </div>
        </div>
        <Link href={"/" + id} className='p-1 shadow-md rounded-full before:content-["view order"]'>
            <FaCircleInfo className='text-primary text-xl' />
        </Link>
    </div>
  )
}

export default Actions