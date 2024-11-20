import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCart } from '../Providers/CartProvider'

const Header = () => {

    const { cartList } = useCart()

    return (
        <div className='d-flex justify-content-between px-5 align-items-center' style={{height: "50px"}}>
            <div>LOGO</div>
            <div>
                <Link to="/cart"><FaShoppingCart size={25} /> {cartList?.length}</Link>
            </div>
        </div>
    )
}

export default Header
