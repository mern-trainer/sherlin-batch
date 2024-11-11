import { Toaster } from "react-hot-toast"
import { CounterProvider } from "./Providers/CounterProvider"
import TodoPage from "./Pages/TodoPage"
import { TodoProvider } from "./Providers/TodoProvider"

const App = () => {

    return <CounterProvider>
        {/* <Context /> */}
        <TodoProvider>
            <TodoPage />
            <Toaster position="top-right"/>
       </TodoProvider>
    </CounterProvider>
}

export default App