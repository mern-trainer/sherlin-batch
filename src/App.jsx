import { Fragment } from "react"
import TodoPage from "./Pages/TodoPage"
import Bootstrap from "./Pages/Bootstrap"
import Ecommerce from "./Pages/Ecommerce"
import { Toaster } from "react-hot-toast"
import Parent from "./Components/Parent"

const App = () => {
    return <Fragment>
        <TodoPage />
        {/* <Parent /> */}
        {/* <Ecommerce /> */}
        {/* <Bootstrap /> */}
        <Toaster position="top-right"/>
    </Fragment>
}

export default App