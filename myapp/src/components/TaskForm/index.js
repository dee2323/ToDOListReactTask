import React, { useContext, useState } from 'react'
import style from './style.module.css'
import {tasksContext} from '../../context/tasksContext'

const TaskForm = () => {
    const { handleAddingTask }=useContext(tasksContext)
    const [input, setInput] = useState('')
    return (<>
        <h1 className={style.h1}>ToDo List </h1>
        <p className={style.p}>Today I need to ✏️</p>
        <form className={style.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Enter your task..." className="task" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className='add' onClick={() => { input && handleAddingTask(input); setInput('') }}><i className="fal fa-plus"></i></button>
        </form>
    </>)
}
export default TaskForm;