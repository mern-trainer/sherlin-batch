import { useState } from "react"
import toast from "react-hot-toast"
import { FaCheck, FaTrash } from "react-icons/fa"
import { v4 } from "uuid"
import TodoList from "../Components/TodoList"

const TodoPage = () => {

    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")

    const handleAddToList = () => {
        if (todo === "") {
            return toast.error("Task is required!")
        }
        const index = todoList.findIndex((item) => item.title.toLowerCase() === todo.toLowerCase())
        if (index > -1) {
            return toast.error("Task already exist!")
        }
        const currentDateTime = new Date().toLocaleString("en-IN").toUpperCase()
        const taskObj = {
            id: v4(),
            title: todo,
            completed: false,
            createdAt: currentDateTime,
            updatedAt: currentDateTime
        }
        setTodoList([taskObj, ...todoList])
        setTodo("")
    }

    const removeTask = (id) => {
        const res = todoList.filter((item) => item.id !== id)
        setTodoList(res)
    }

    const handleStatusUpdate = (id) => {
        const res = todoList.map(item => {
            if (item.id == id) {
                return { ...item, completed: !item.completed }
            }
            return item
        })
        setTodoList(res)
    }

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
            <button onClick={handleAddToList}
                className="p-1 w-100 bg-secondary border-0 text-light"
            >Add Task</button>
        </div>
        <TodoList todoList={todoList} removeTask={removeTask} handleStatusUpdate={handleStatusUpdate} heading={"Pending Task"} completed={false}/>
        <TodoList todoList={todoList} removeTask={removeTask} handleStatusUpdate={handleStatusUpdate} heading={"Completed Task"} completed={true}/>
    </div>
}

export default TodoPage