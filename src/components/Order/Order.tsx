import { OrderType } from '@/types'
import Image from 'next/image'
import React from 'react'
import Actions from './Actions/Actions'

const Order = ({id, reason, store_name, store_logo, store_url, amount, items}:OrderType) => {
  return (
    <tr>
      <td className="main-td">order #{id}</td>
      <td className="main-td">
        <a href={store_url} className='flex items-center'>
          <Image
            src={store_logo}
            width={32}
            height={32}
            alt={store_name}
            className='mr-2 p-1 rounded-full shadow-md'
            />
            <span className='hover:text-secondary'>{store_name}</span>
        </a>
      </td>
      <td className="main-td">{reason}</td>
      <td className="main-td">{amount}</td>
      <td className="main-td">{items.length} (not yet).</td>
      <td className="px-4 py-2 whitespace-nowrap"><Actions id={id}/></td>
    </tr>
  )
}

export default Order