import React, { Fragment } from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product, discountPrice, handleAddToCart, cart }) => {

    const navigate = useNavigate()

    return <div className='bg-light p-1' style={{ width: "15rem" }}>
        <div onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.images[0]} alt={product.title} style={{ aspectRatio: 1 / 1, objectFit: "contain", width: "15rem" }} />
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
            {
                cart ? <Fragment>
                    <div>
                        {product.qty}
                    </div>
                    <button className='btn btn-danger w-100 mt-2' >Remove</button>
                </Fragment> : <button className='btn btn-success w-100 mt-2' onClick={() => handleAddToCart(product)}>Add To Cart</button>
            }
        </div>
    </div>
}

export default ProductCard


// HomePage, AboutPage, ContactPage