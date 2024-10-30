import { useState } from "react"

const TodoPage = () => {

    const [list, setList] = useState([])

    const handlePasswordGenerate = () => {
        const string = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"]
        let password = ""
        let i = 0
        while (i < 10) {
            let randomNumber = parseInt(Math.random() * string.length)
            password += string[randomNumber] // a = a + b
            i++
        }
        setList([...list, password])
    }

    return <div>
        <button onClick={handlePasswordGenerate}>Generate Password</button>
        {list.join(" , ")}
    </div>
}

export default TodoPage