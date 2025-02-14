"use client"
import React, { useEffect, useState } from 'react'
import Order from '../Order';
import Loading from "../Loading"

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
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
  
  useEffect(()=> {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      {
        orders.map((order:any) => <Order {...order} />)
      }
    </div>
  )
}

export default Orders