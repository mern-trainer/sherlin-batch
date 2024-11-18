// useEffect => to handle lifecycle of a component
// mounting, unmounting, updating => stages

import { useEffect, useState } from "react"

// mounting => Called after the initial render
// Updating => change in props or state [component]
// unmounting => Called before component removed from the DOM.

const EffectHook = () => { 

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log(counter)
        return () => {
            console.log("Unmounting...")    
        }
    }, [counter])
 
    return <div className="p-2">
        <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Update [{counter}]</button>
    </div>
}

export default EffectHook
