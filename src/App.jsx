import { BrowserRouter, Routes, Route } from "react-router-dom"
import A from "./Pages/A"
import B from "./Pages/B"
import ShopPage from "./Pages/ShopPage"
import EcommerceCart from "./Pages/EcommerceCart"
import TodoPage from "./Pages/TodoPage"
import LandingPage from "./Pages/LandingPage"

// React Routing

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/shop" Component={ShopPage} />
            <Route path="/cart" Component={EcommerceCart} />
            <Route path="/todo" Component={TodoPage} />
        </Routes>
    </BrowserRouter>
        
}

export default App