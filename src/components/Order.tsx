import { OrderType } from '@/types'
import React from 'react'

const Order = ({id, store_name}:{id: number, store_name: string}) => {
  return (
    <div>{store_name}</div>
  )
}

export default Order