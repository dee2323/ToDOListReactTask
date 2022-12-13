import React from 'react'
import style from './style.module.css'
const TasksList = ({ tasks, handleDeletingTask, handleCompletion }) => {
    const listTasks = tasks.map(task => (<li key={task.id}>
        <p className={task.isCompleted ? style.complete}>{task.task}</p>
        <button onClick={() => handleCompletion(task.id)} className="complete"><i className="far fa-check-circle"></i></button> <button className="delete" onClick={() => handleDeletingTask(task.id)}><i className="fas fa-trash-alt"></i></button>
    </li>))
    return (<ul className={style.todos} id="todos">
        {listTasks}
    </ul>)
}
export default TasksList;