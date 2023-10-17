"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const steps = [
  { step: 1, name: "Menu", url: "/" },
  { step: 2, name: "Summary", url: "/summary" },
  { step: 3, name: "Details & Total", url: "/total" },
];

const Steps = () => {
  const router = useRouter()
  const pathname = usePathname()

  const determineProgress = () => {
    let value;
    if (pathname === "/") {
      value = 2;
    } else if (pathname === "/summary") {
      value = 50;
    } else {
      value = 100;
    }
    return value;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            onClick={() => {
              router.push(step.url);
            }}
            className="text-lg sm:text-2xl font-bold"
            key={step.step}
          >
            {step.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white progress"
          style={{ width: `${determineProgress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
