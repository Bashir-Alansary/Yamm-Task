"use client"
import React, { useEffect, useState } from 'react'
import Order from '../Order/Order';
import { OrderType } from '@/types';
import { ordersTableThs } from '@/constants';
import Paginations from '../Paginations';
import TableLoading from '../TableLoading';

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

  
  useEffect(()=> {
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
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  console.log(error);
  
  if (loading) {
    return (
      <TableLoading pageLength={pageLength} />
    )
  }

  return (
  <div className="main-view">
    <h1 className='main-h1'>Refund Orders</h1>
    <div className='table-parent'>
      <table className="main-table">
        <thead className="main-thead">
          <tr>
            {
              ordersTableThs.map(tableTh => {
                const {id, name} = tableTh;
                return (
                  <th key={id} className="main-th">{name}</th>
                )
              })
            }
          </tr>
        </thead>

        <tbody className="main-tbody">
          {
            shownOrders.map((order:OrderType) => <Order key={order.id} {...order} />)
          }
        </tbody>
      </table>
    </div>
    <Paginations 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} 
      pages={pages} 
    />
  </div>
  )
}

export default Orders