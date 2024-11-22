import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {

    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const getProducts = async () => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(data)
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
                product && <div>
                    { product.title }
                </div>
            }
        </div>
    )
}

export default SingleProductPage
