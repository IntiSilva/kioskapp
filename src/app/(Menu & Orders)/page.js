"use client"

import Product from "@/components/Product";
import useKiosk from "@/hooks/useKiosk";

export default function Home() {
  const { activeCategory } = useKiosk();

  return (
    <>
      <h1 className="text-4xl font-black">{activeCategory?.name}</h1>
      <p className="text-2xl my-10">
      Choose and customize your order next
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {activeCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      </>
  );
}
