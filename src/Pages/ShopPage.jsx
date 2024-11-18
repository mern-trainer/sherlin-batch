import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

const ShopPage = () => {

    const [products, setProducts] = useState([]) // state for storing products
    
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
        <div className='d-flex justify-content-center gap-2 flex-wrap mt-2'>
                {
                    products.map(product => {
                        
                        const discountPrice = product.price - (product.price * product.discountPercentage / 100)

                        return <div key={product.id} className='bg-light p-1' style={{width: "15rem"}}>
                            <div>
                                <img src={product.images[0]} alt={product.title} style={{aspectRatio: 1/1, objectFit: "contain", width: "15rem"}}/>
                            </div>
                            <div>
                                <h5 className="text-truncate text-center">{product.title}</h5>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex align-items-center gap-1'>
                                        <div><FaStar /></div>
                                        <div>{product.rating}</div>
                                    </div>
                                    <div>
                                        <s>${product.price}</s>
                                        <b>${discountPrice.toFixed(2)}</b>
                                    </div>
                                </div>
                                <button className='btn btn-success w-100 mt-2'>Add To Cart</button>
                            </div>
                        </div>
                    })
                }
            </div>
    )
}

export default ShopPage
