"use client"

import Image from "next/image";
import useKiosk from "../hooks/useKiosk";

const Category = ({ category }) => {
  const { activeCategory, handleClickCategory } = useKiosk();

  const { name, icon, id } = category;
  return (
    <div
      className={`${
        activeCategory?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-4 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icon_${icon}.svg`}
        alt="Icon imagee"
        priority={true}
      />

      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategory(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
