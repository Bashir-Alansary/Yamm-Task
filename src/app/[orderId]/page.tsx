import React from 'react'

const page = async({params}: {params: {orderId: string}}) => {
      const res = await fetch("http://localhost:4000/orders/" + params.orderId);
      const item = res.json();
      
  return (
    <div>page</div>
  )
}

export default page