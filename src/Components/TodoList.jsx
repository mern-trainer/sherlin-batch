import { Fragment } from "react"
import { FaCheck, FaTrash } from "react-icons/fa"

const TodoList = ({ todoList, removeTask, handleStatusUpdate, heading, completed }) => {
    return <Fragment>
        <h3 className="text-center mt-3">{ heading } - ({todoList.filter(item => item.completed == completed).length})</h3>
        <div className="w-50 mt-1">
            {
                todoList.filter(item => item.completed == completed).map((item) => {
                    return <div key={item.id}
                            className="p-2 bg-light my-2 d-flex justify-content-between"
                        >
                        <div className="text-truncate">
                            <div>ID: {item.id}</div>
                            <div>Task : {item.title}</div>
                            <div>Task : {item.completed ? "Completed" : "Pending"}</div>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <FaTrash cursor={'pointer'} className="text-danger" onClick={() => removeTask(item.id)}/>
                            {!completed && <FaCheck cursor={'pointer'} className="text-success" onClick={() => handleStatusUpdate(item.id)} />}
                        </div>
                    </div>
                })
            }
        </div>
    </Fragment>
}

export default TodoList
