// state => state is an object to handle data in a component
// Hooks => Functions, to manage state and lifecycle of a component
// state => useState()

import { useState } from "react"

const CounterPage = () => {

    const [counter, setCounter] = useState({counterOne: 0, counterTwo: 0})

    const handleIncrementOne = () => {
        setCounter({...counter, counterOne: counter.counterOne + 1})
    }

    const handleDecrementOne = () => {
        setCounter({...counter, counterOne: counter.counterOne - 1})
    }

    const handleIncrementTwo = () => {
        setCounter({...counter, counterTwo: counter.counterTwo + 1})
    }

    const handleDecrementTwo = () => {
        setCounter({...counter, counterTwo: counter.counterTwo - 1})
    }

    return <div style={{ display: "flex", alignItems: "center", marginTop: "20px", flexDirection: "column" }}>
        <div>CounterOne: {counter.counterOne}</div>
        <div>
            <button onClick={handleIncrementOne}>Increment 1</button>
            <button onClick={handleDecrementOne}>Decrement 1</button>
        </div>
        <div style={{marginTop: "50px"}}>CounterTwo: {counter.counterTwo}</div>
        <div>
            <button onClick={handleIncrementTwo}>Increment 2</button>
            <button onClick={handleDecrementTwo}>Decrement 2</button>
        </div>
    </div>
}

export default CounterPage
