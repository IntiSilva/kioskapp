import '../globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/Sidebar";
import Steps from "@/components/Steps";
import ProductModal from "@/components/ProductModal";
import ModalWrapper from '@/components/ModalWraper';
import { KioskProvider } from '@/context/KioskProvider';

import "react-toastify/dist/ReactToastify.css";


export const metadata = {
  title: {
  template : "Coffee Shop - %s",
  default: "Coffee Shop - Menu"
  },
  description: "Kiosk | Coffee Shop"
}


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {


  return (

    <html lang="en">

      <body className={inter.className}>

        <KioskProvider>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Steps />
            {children}
          </div>
        </main>
      </div>

        <ModalWrapper>
          <ProductModal />
          </ModalWrapper>

      <ToastContainer />

      </KioskProvider>
        </body>

    </html>

  )
}
