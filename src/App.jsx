import { Toaster } from "react-hot-toast"
import { CounterProvider } from "./Providers/CounterProvider"
import TodoPage from "./Pages/TodoPage"
import { TodoProvider } from "./Providers/TodoProvider"
import EffectHook from "./Pages/EffectHook"
import ShopPage from "./Pages/ShopPage"

const App = () => {

    return <CounterProvider>
        {/* <Context /> */}
        <TodoProvider>
            {/* <TodoPage /> */}
            {/* <EffectHook /> */}
            <ShopPage />
            <Toaster position="top-right"/>
       </TodoProvider>
    </CounterProvider>
}

export default App