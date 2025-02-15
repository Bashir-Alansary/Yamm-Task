"use client"
import Item from '@/components/Item';
import Paginations from '@/components/Paginations';
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
        } finally {
          setLoading(false);
        }
      }
      
    useEffect(()=> {
        fetchData();
    }, []);

  return (
    <div className="relative pb-10 h-[80%]">
      <Link href="/" className='flex items-center hover:text-blue-950'>
        <FaArrowLeftLong />
        <span className='ml-2'>Orders</span>
      </Link>
      <h1 className='font-bold my-3'>Order Items</h1>
      <div className='overflow-x-auto'>
        <table className="min-w-full divide-y-4 divide-[#edf0f7] bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
                <tr>
                {
                    itemsTableThs.map(itemTh => {
                    const {id, name} = itemTh;
                    return (
                        <th key={id} className="px-4 py-2 bg-[#edf0f7] font-bold whitespace-nowrap text-gray-900 text-left">{name}</th>
                    )
                    })
                }
                </tr>
            </thead>

            <tbody className="divide-y-4 divide-[#edf0f7]">
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
        pageLength={pageLength}  
      />
    </div>
  )
}

export default page