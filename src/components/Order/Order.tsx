import { OrderType } from '@/types'
import Image from 'next/image'
import React from 'react'
import Actions from './Actions/Actions'

const Order = ({id, reason, store_name, store_logo, store_url, amount, active, decision, items}:OrderType) => {
  return (
    <tr>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">order #{id}</td>
      <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
        <a href={store_url} className='flex items-center'>
          <Image
            src={store_logo}
            width={32}
            height={32}
            alt={store_name}
            className='mr-2 p-1 rounded-full shadow-md'
            />
            <span>{store_name}</span>
        </a>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">{reason}</td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">{amount}</td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">{items.length} (not yet).</td>
      <td className="px-4 py-2 whitespace-nowrap"><Actions id={id} active={active}/></td>
    </tr>
  )
}

export default Order