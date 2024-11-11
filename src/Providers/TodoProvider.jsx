import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { v4 } from "uuid";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    
    const [todoList, setTodoList] = useState([])

    const handleAddToList = (todo) => {
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
        
    }

    const removeTask = (id) => {
        const res = todoList.filter((item) => item.id !== id)
        setTodoList(res)
    }

    const handleStatusUpdate = (id) => {
        const res = todoList.map(item => {
            if (item.id === id) {
                return { ...item, completed: !item.completed }
            }
            return item
        })
        setTodoList(res)
    }

    const values = { todoList, setTodoList, handleAddToList, removeTask, handleStatusUpdate }

    return <TodoContext.Provider value={values}>
        { children }
    </TodoContext.Provider>
}

export const useTodo = () => useContext(TodoContext)