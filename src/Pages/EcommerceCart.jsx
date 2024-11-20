import Header from "../Components/Header"
import ProductCard from "../Components/ProductCard"
import { useCart } from "../Providers/CartProvider"

const EcommerceCart = () => {

    const { cartList } = useCart()

    return <><Header /><div className='d-flex justify-content-center gap-2 flex-wrap mt-2'>
    {
        cartList.map(product => {

            const discountPrice = product.price - (product.price * product.discountPercentage / 100)

            return <ProductCard key={product.id} cart={true} discountPrice={discountPrice} product={product}/>
        
        })
    }
</div></>
}

export default EcommerceCart
