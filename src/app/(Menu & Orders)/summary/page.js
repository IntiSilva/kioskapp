"use client"

import useKiosk from "@/hooks/useKiosk";
import ProductSummary from "@/components/ProductSummary";

export default function Summary() {
  const { orderDetails } = useKiosk();
  return (
    <>
      <h1 className="text-4xl font-black">Summary</h1>
      <p className="text-2xl my-10">Check your order</p>

      {orderDetails.length === 0 ? (
        <p className="text-center text-2xl">There are no items in your order</p>
      ) : (
        orderDetails.map((product) => (
          <ProductSummary key={product.id} product={product} />
        ))
      )}
    </>
  );
}
