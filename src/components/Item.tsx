import { ItemType } from '@/types'
import React from 'react'

const Item = ({id, name, price, quantity}: ItemType) => {
  return (
    <tr>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">#{id}</td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">{name}</td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">{price}</td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">{quantity}</td>
      <td className="px-4 py-2 whitespace-nowrap text-gray-700">{price * quantity}</td>
    </tr>
  )
}

export default Item