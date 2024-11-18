import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShopPage = () => {

    const [products, setProducts] = useState([])
    
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

    return (
        <div>
            {
                products.map(product => {
                    return <div key={product.id}>
                        { product.title }
                    </div>
                })
            }
        </div>
    )
}

export default ShopPage
