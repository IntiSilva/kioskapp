"use client"

import { useEffect, useCallback } from "react";
import useKiosk from "@/hooks/useKiosk";
import { formatMoney } from "@/helpers/index";

export default function Total() {
  const { orderDetails, name, setName, placeOrder, total } = useKiosk();

  const checkOrderDetails = useCallback(() => {
    return orderDetails.length === 0 || name === "" || name.length < 3;
  }, [orderDetails, name]);

  useEffect(() => {
    checkOrderDetails();
  }, [orderDetails, checkOrderDetails]);

  return (
    <>
      <h1 className="text-4xl font-black">Total & Confirm Order</h1>
      <p className="text-2xl my-10">Confirm your order next</p>

      <form onSubmit={placeOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total to pay: {""}{" "}
            <span className="font-bold">{formatMoney(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              checkOrderDetails()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800 cursor-pointer"
            }  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirm your order"
            disabled={checkOrderDetails()}
          />
        </div>
      </form>
    </>
  );
}
