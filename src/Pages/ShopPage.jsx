import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useCart } from '../Providers/CartProvider'
import ProductCard from '../Components/ProductCard'

const ShopPage = () => {

    const [products, setProducts] = useState([]) // state for storing products
    const { cartList, setCartList } = useCart()
    
    const getProducts = async () => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/products`)
            setProducts(data.products)
        } catch (err) {
            return { status: false, message: err.message }
        }
    }

    useEffect(() => { 
        getProducts()
    }, [])

    const handleAddToCart = (product) => {
        const index = cartList.findIndex(pdt => pdt.id === product.id)
        if (index === -1) {
            product.qty = 1
            return setCartList([...cartList, product])
        }
        const res = cartList.map(pdt => {
            if (pdt.id === product.id) {
                return { ...pdt, qty: pdt.qty + 1 }
            }
            return pdt
        })
        setCartList(res)
    }

    return (
        <><Header /><div className='d-flex justify-content-center gap-2 flex-wrap mt-2'>
            {
                products.map(product => {

                    const discountPrice = product.price - (product.price * product.discountPercentage / 100)

                    return <ProductCard key={product.id} handleAddToCart={handleAddToCart} discountPrice={discountPrice} product={product}/>
                
                })
            }
        </div></>
    )
}

export default ShopPage
