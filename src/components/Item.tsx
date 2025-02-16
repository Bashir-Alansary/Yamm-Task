import { ItemType } from '@/types'
import React from 'react'

const Item = ({id, name, price, quantity}: ItemType) => {
  return (
    <tr>
      <td className="main-td">#{id}</td>
      <td className="main-td">{name}</td>
      <td className="main-td">{price}</td>
      <td className="main-td">{quantity}</td>
      <td className="main-td">{price * quantity}</td>
    </tr>
  )
}

export default Item