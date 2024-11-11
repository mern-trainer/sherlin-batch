import { useState } from "react"
import toast from "react-hot-toast"
import { v4 } from "uuid"
import TodoList from "../Components/TodoList"
import { useTodo } from "../Providers/TodoProvider"

const TodoPage = () => {

    const { todoList, setTodoList, handleAddToList, removeTask, handleStatusUpdate } = useTodo()
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
            <button onClick={() => handleAddToList(todo)}
                className="p-1 w-100 bg-secondary border-0 text-light"
            >Add Task</button>
        </div>
        <TodoList todoList={todoList} removeTask={removeTask} handleStatusUpdate={handleStatusUpdate} heading={"Pending Task"} completed={false}/>
        <TodoList todoList={todoList} removeTask={removeTask} handleStatusUpdate={handleStatusUpdate} heading={"Completed Task"} completed={true}/>
    </div>
}

export default TodoPage