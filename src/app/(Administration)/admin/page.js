"use client"

import useSWR from "swr"
import Order from "@/components/Order"

export default function Admin() {

    const fetcher = async () =>{
        const res = await fetch('/api/orders')
        const orderData = await res.json()
        return orderData
    }
    const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 100})


  return (
    <>
        <h1 className="text-4xl font-black">Administration Panel</h1>
        <p className="text-2xl my-10">Manage orders</p>

        {data && data.length ? data.map(order =>
            <Order key={order.id} order={order} />
            ) : <p>There are no pending orders</p> }

    </>
  )
}
