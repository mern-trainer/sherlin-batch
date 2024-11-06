import Child from "./Child"

// properties => props => To pass data from parent component to child component.
const Parent = () => {
    const data = "Hello"
    return <div>
        Parent Component
        <Child />
    </div>
}

export default Parent
