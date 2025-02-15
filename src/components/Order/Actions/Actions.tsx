"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import ActiveBtn from './ActiveBtn';
import Decision from './Decision';
import Toast from './Toast';

interface Props {
    id: string,
    active: boolean,
}

const Actions = ({id, active}: Props) => {

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
              <ActiveBtn active={active} setShowToast={setShowToast}/>
          </div>
        </div>
        <Link href={"/" + id} className='p-1 shadow-md rounded-full before:content-["view order"]'>
            <FaCircleInfo className='text-blue-950 text-xl' />
        </Link>
    </div>
  )
}

export default Actions