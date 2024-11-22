import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShopPage from "./Pages/ShopPage"
import EcommerceCart from "./Pages/EcommerceCart"
import TodoPage from "./Pages/TodoPage"
import LandingPage from "./Pages/LandingPage"
import PageNotFound from "./Pages/PageNotFound"
import SingleProductPage from "./Pages/SingleProductPage"

// React Routing

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/shop" Component={ShopPage} />
            <Route path="/cart" Component={EcommerceCart} />
            <Route path="/product/:id?" Component={SingleProductPage} />
            <Route path="/todo" Component={TodoPage} />
            <Route path="*" Component={PageNotFound} />
        </Routes>
    </BrowserRouter>
        
}

export default App