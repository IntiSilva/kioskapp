"use client"

import Image from "next/image"
import { toast } from "react-toastify"
import { formatMoney } from "@/helpers"

export default function Order({order}) {
    const { id, name, total, orderDetails } = order

    const completeOrder = async () => {
        try {
           const res = await fetch(`/api/orders/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json();
            toast.success('Order Ready')
            console.log(data)

            //Added delete order functionality to keep db clean
            setTimeout( async () => {
                const res = await fetch(`/api/orders/${id}`, { method: 'DELETE'})
                console.log(res.status)
            }, 3000)
        } catch(error){
            console.log(error)
            toast.error('There was an error')
        }
    }

  return (
    <div className="border p-10 space-y-5">
        <h3 className="text-2xl font-bold">Order: {id}</h3>
        <p className="text-lg font-bold">Client: {name}</p>


        <div>
            {orderDetails.map(plate => (
                <div key={plate.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image
                            width={400}
                            height={500}
                            src={`/assets/img/${plate.image}.jpg`}
                            alt={`${plate.name} plate imagee`}
                            className="rounded-sm"
                        />
                    </div>

                    <div className="p-5 space-y-2">
                        <h4 className="text-xl font-bold text-amber-500">{plate.name}</h4>
                        <p className="text-lg font-bold">Quantity: {plate.quantity}</p>
                    </div>

                </div>
            ))}
        </div>

        <div className="md:flex md:items-center md:justify-between my-10">
            <p className="mt-5 font-black text-4xl text-amber-500">
                Total to pay: {formatMoney(total)}
            </p>

            <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-8 py-3 px-10 uppercase font-bold rounded-lg"
                type="button"
                onClick={completeOrder}
            >
                Complete Order
            </button>
        </div>
    </div>
  )
}
