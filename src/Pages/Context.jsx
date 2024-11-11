import { useCounter } from "../Providers/CounterProvider"


const Context = () => {

    // step 4
    const { counter, setCounter } = useCounter()

    return <div>
        { counter }
        <button onClick={() => setCounter(counter + 1)}>INC</button>
    </div>
}

export default Context
