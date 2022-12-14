import React, { useState } from 'react'
import Overlay from '../Overlay/index'
import style from './style.module.css'
const TasksList = ({ tasks, handleDeletingTask, handleCompletion, isSearching }) => {
    const [showOVerlay, setShowOverlay] = useState(false)
    const [id, setId] = useState(0)


    const listTasks = isSearching && tasks.length == 0 ? <div style={{ textAlign: 'center', color: 'red' }}>No such tasks</div> : (tasks.map(task => (<li key={task.id}>
        <p className={task.isCompleted && style.complete}>{task.task}</p>
        <button onClick={() => handleCompletion(task.id)} className="complete"><i className="far fa-check-circle"></i></button> <button type='submit' className="delete" onClick={() => { setId(task.id); setShowOverlay(true); }}><i className="fas fa-trash-alt"></i></button>
    </li>)))
    return (<ul className={style.todos} id="todos">
        {listTasks}
        {showOVerlay && <Overlay setShowOverlay={setShowOverlay} id={id}
            handleDeletingTask={handleDeletingTask}
        />}

    </ul>)
}
export default TasksList;