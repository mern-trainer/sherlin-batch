import { useState } from "react"
import TodoList from "../Components/TodoList"
import { useTodo } from "../Providers/TodoProvider"

const TodoPage = () => {

    const { handleAddToList } = useTodo()
    const [todo, setTodo] = useState("")

    return <div className="d-flex flex-column align-items-center mt-4">
        <div className="w-50 d-flex flex-column gap-3">
            <input
                type="text"
                value={todo} // controlled input
                onChange={(event) => setTodo(event.target.value)}
                placeholder="Enter Task..."
                name="task"
                className="p-2 border-0 w-100"
                style={{ outline: 0 }}
            />
            <button onClick={() => {
                handleAddToList(todo)
                setTodo("")
            }}
                className="p-1 w-100 bg-secondary border-0 text-light"
            >Add Task</button>
        </div>
        <TodoList heading={"Pending Task"} completed={false}/>
        <TodoList heading={"Completed Task"} completed={true}/>
    </div>
}

export default TodoPage