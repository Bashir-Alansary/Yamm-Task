import Link from 'next/link';
import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import ActiveBtn from './ActiveBtn';
import Decision from './Decision';

interface Props {
    id: string,
    active: boolean,
}

const Actions = ({id, active}: Props) => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex'>
            <Decision />
            <ActiveBtn active={active}/>
        </div>
        <Link href={"/" + id} className='p-1 shadow-md rounded-full before:content-["view order"]'>
            <FaCircleInfo className='text-blue-950 text-xl' />
        </Link>
    </div>
  )
}

export default Actions