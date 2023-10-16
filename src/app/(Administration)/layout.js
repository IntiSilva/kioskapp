import '../globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const metadata = {
  title: "Coffee Shop - Admin",
  description: "Kiosk | Coffee Shop"
}


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {


  return (

    <html lang="en">

      <body className={inter.className}>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                    className='ml-2'
                    priority={true}
                />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
        </body>

    </html>

  )
}
