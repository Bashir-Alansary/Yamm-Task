"use client"
import Item from '@/components/Item';
import Paginations from '@/components/Paginations';
import TableLoading from '@/components/TableLoading';
import { itemsTableThs } from '@/constants';
import { ItemType, OrderType } from '@/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const initOrder = {
    id: "",
    reason: "",
    store_name: "",
    store_logo: "",
    store_url: "",
    amount: 0,
    active: false,
    decision: null,
    items: [],
}

const page = () => {

      /* fetching data variables*/
      const [order, setOrder] = useState<OrderType>(initOrder);
      const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<string>("");
      const params = useParams<{ orderId: string; }>()

       /* pagination variables */
        const [currentPage, setCurrentPage] = useState<number>(1);
        const pageLength = 7;
        const pages = Math.ceil(order.items.length / pageLength);
        const startIndex = (currentPage - 1) * pageLength;
        const endIndex = startIndex + pageLength;
        const shownItems = order.items.slice(startIndex, endIndex);

    const fetchData = async() => {
        try {
          const res = await fetch(`http://localhost:4000/orders/${params.orderId}`);
          if (!res.ok) throw new Error("Failed to fetch the Order");
          const orders = await res.json();
          setOrder(orders);
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
      
    useEffect(()=> {
        fetchData();
    }, []);
    

    if (loading) {
      return <TableLoading pageLength={pageLength} />
    }


  return (
    <div className="main-view">
      <Link href="/" className='flex items-center hover:text-blue-950'>
        <FaArrowLeftLong />
        <span className='ml-2'>Orders</span>
      </Link>
      <h1 className='main-h1'>Order Items</h1>
      <div className='table-parent'>
        <table className="main-table">
            <thead className="main-thead">
                <tr>
                {
                    itemsTableThs.map(itemTh => {
                    const {id, name} = itemTh;
                    return (
                        <th key={id} className="main-th">{name}</th>
                    )
                    })
                }
                </tr>
            </thead>

            <tbody className="main-tbody">
                {
                    shownItems.map((item:ItemType) => <Item key={item.id} {...item} />)
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

export default page