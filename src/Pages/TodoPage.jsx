import { useState } from "react"
import { FaTrash } from "react-icons/fa"

const TodoPage = () => {

    // task management / todo application

    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")

    const handleAddToList = () => {
        setTodoList([todo, ...todoList])
        setTodo("")
    }

    const removeTask = (idx) => {
        const res = todoList.filter((item, index) => index != idx)
        setTodoList(res)
    }

    return <div className="d-flex flex-column align-items-center mt-4">
        <div className="w-50 d-flex flex-column gap-3">
            <input
                type="text"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                placeholder="Enter Task..."
                name="task"
                className="p-2 border-0 w-100"
                style={{ outline: 0 }}
            />
            <button onClick={handleAddToList}
                className="p-1 w-100 bg-secondary border-0 text-light"
            >Add Task</button>
        </div>
        <div className="w-50 mt-1">
            {
                todoList.map((item, index) => {
                    return <div key={index}
                            className="p-2 bg-light my-2 d-flex justify-content-between"
                        >
                        <div className="text-truncate">
                            {index + 1}) {item}
                        </div>
                        <div>
                            <FaTrash cursor={'pointer'} onClick={() => removeTask(index)}/>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoPage