"use client"

import { useState, useEffect, createContext } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const KioskContext = createContext()


const KioskProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState({})
    const [product, setProduct ] = useState({})
    const [modal, setModal] = useState(false)
    const [orderDetails, setOrderDetails] = useState([])
    const [name, setName] = useState('')
    const [total, setTotal] = useState(0)


    const router = useRouter()

    const getCategories = async () => {
        const res = await fetch('/api/categories')
        const data = await res.json()
        setCategories(data)
    }
    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setActiveCategory(categories[0])
    }, [categories])

    useEffect(() => {
        const newTotal = orderDetails.reduce((total, product) => (product.price * product.quantity ) + total, 0)

        setTotal(newTotal)
    }, [orderDetails])

    const handleClickCategory = id => {
        const category = categories.filter( cat => cat.id === id )
        setActiveCategory(category[0])
        router.push('/')
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAddOrderDetails = ({categoryId, ...product}) => {
        if(orderDetails.some(productState => productState.id === product.id)) {
           // Update quantity
           const updatedOrderDetails = orderDetails.map(productState => productState.id === product.id ? product : productState)
           setOrderDetails(updatedOrderDetails)

           toast.success('Saved Succesfully')
        } else {
            setOrderDetails([...orderDetails, product])
            toast.success('Added to the Order')
        }

        setModal(false)

    }

    const handleEditQuantity = id => {
        const updateProduct = orderDetails.filter( product => product.id === id)
        setProduct(updateProduct[0])
        setModal(!modal)
    }

    const handleDeleteProduct = id => {
        const updatedOrderDetails = orderDetails.filter( product => product.id !== id)
        setOrderDetails(updatedOrderDetails)
    }

    const placeOrder = async (e) => {
        e.preventDefault();

        try {
            await fetch('/api/orders', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ orderDetails, name, total, date: Date.now().toString() })
              })

            // Reset the app
            setActiveCategory(categories[0])
            setOrderDetails([])
            setName('')
            setTotal(0)

            toast.success('Order Sent Succesfully')

            setTimeout(() => {
                router.push('/')
            }, 3000)

        } catch (error) {
            console.log(error)
        }

    };

    return(
        <KioskContext.Provider
            value={{
                categories,
                activeCategory,
                handleClickCategory,
                product,
                handleSetProduct,
                modal,
                handleChangeModal,
                handleAddOrderDetails,
                orderDetails,
                handleEditQuantity,
                handleDeleteProduct,
                name,
                setName,
                placeOrder,
                total
            }}
        >
            {children}
        </KioskContext.Provider>
    )
}

export {
    KioskProvider
}
export default KioskContext