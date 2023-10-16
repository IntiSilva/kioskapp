"use client"

import { usePathname } from 'next/navigation';
import useKiosk from "../hooks/useKiosk";

export const formatMoney = (amount) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};