import { useDispatch, useSelector } from "react-redux"
import "../index.css"
import { Add, Edit, Delete } from "../config/Action"
import { useState } from "react"

const TaskViewer = () => {

    const newTask = useSelector(state => state.elem)
    const dispatch = useDispatch()
    const [task, setTask] = useState()

    const NewTask = (e) => {
        setTask(e.target.value)

    }
    return (
            <div className="parent">
                <div className="first-inputs">
                    <input className="text" type="text" onChange={NewTask} />
                    <button className="Add-Btn" onClick={() => { dispatch(Add(task)), setTask("") }}>Add</button>
                </div>
                {newTask.map((task, index) => {

                    return (
                task.text ?
                    <div key={index} className="list-ctn">
                        <div className="task">{task.text}</div>
                        <div className="btns">
                            <button className="update" onClick={() => dispatch(Edit(task.id, prompt("Update here :")))}>Update</button>
                            <button className="delete" onClick={() => dispatch(Delete(task.id))}>Delete</button>
                        </div>
                    </div> 
                : null)
                }
                )}

            </div>
    )
}

export default TaskViewer