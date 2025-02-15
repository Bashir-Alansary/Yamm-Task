"use client"
import React, { useEffect, useState } from 'react'
import Order from '../Order/Order';
import Loading from "../OrdersLoading"
import { OrderType } from '@/types';
import { ordersTableThs } from '@/constants';
import Paginations from '../Paginations';
import OrdersLoading from '../OrdersLoading';

const Orders = () => {

  /* fetching data variables*/
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  /* pagination variables */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageLength = 5;
  const pages = Math.ceil(orders.length / pageLength);
  const startIndex = (currentPage - 1) * pageLength;
  const endIndex = startIndex + pageLength;
  const shownOrders = orders.slice(startIndex, endIndex);

  const fetchData = async() => {
    try {
      const res = await fetch("http://localhost:4000/orders");
      if (!res.ok) throw new Error("Failed to fetch the Orders");
      const orders = await res.json();
      setOrders(orders);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred")
      }
    } finally {
      setLoading(false);
    }
  }

const putData = async() => {
    // Define the data to update
const data = {
      "id": "2",
      "reason": "problem with the qaulity",
      "store_name": "Ebay",
      "store_logo": "/images/ebay.png",
      "store_url": "#",
      "amount": 8,
      "active": false,
      "decision": null,
      "Items": [
        {
          "name": "scarf",
          "id": "1",
          "price": 40,
          "quantity": 4
        },
        {
          "name": "shoes",
          "id": "2",
          "price": 80,
          "quantity": 5
        }
      ]
    };

// Define the request options
const requestOptions = {
  method: "PUT", // Specify the request method
  headers: { "Content-Type": "application/json" }, // Specify the content type
  body: JSON.stringify(data) // Send the data in JSON format
};

// Make the request
fetch('http://localhost:4000/orders/2', requestOptions)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => console.log(data)) // Do something with the data
  .catch(error => console.error(error)); // Handle errors

}
  
  useEffect(()=> {
    fetchData();
    putData();
  }, []);

  console.log(error);
  
  if (loading) {
    return (
      <OrdersLoading pageLength={pageLength} />
    )
  }

  return (
  <div className="relative pb-10 h-[80%]">
    <h1 className='font-bold mb-3'>Refund Orders</h1>
    <table className="min-w-full divide-y-4 divide-[#edf0f7] bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          {
            ordersTableThs.map(tableTh => {
              const {id, name} = tableTh;
              return (
                <th key={id} className="px-4 py-2 bg-[#edf0f7] font-bold whitespace-nowrap text-gray-900 text-left">{name}</th>
              )
            })
          }
        </tr>
      </thead>

      <tbody className="divide-y-4 divide-[#edf0f7]">
        {
          shownOrders.map((order:OrderType) => <Order key={order.id} {...order} />)
        }
      </tbody>
    </table>
    <Paginations 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} 
      pages={pages} 
      pageLength={pageLength}  
    />
  </div>
  )
}

export default Orders