import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../Providers/CartProvider'

const Header = () => {

    const { cartList } = useCart()

    const navigate = useNavigate()

    return (
        <div className='d-flex justify-content-between px-5 align-items-center' style={{height: "50px"}}>
            <div>LOGO</div>
            <div>
                <FaShoppingCart size={25} cursor={"pointer"} onClick={() => navigate("/cart")}/> {cartList?.length}
            </div>
        </div>
    )
}

export default Header
