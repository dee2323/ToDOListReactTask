import React, { useState } from 'react'
import style from './style.module.css'

const TaskForm = () => {
    const [input, setInput] = useState('')
    return (<>
        <h1 className={style.h1}>ToDo List </h1>
        <p className={style.p}>Today I need to ✏️</p>
        <form className={style.form} >
            <input type="text" placeholder="Enter your task..." className="task" value={input} />
            <button type="submit" className='add'><i className="fal fa-plus"></i></button>
        </form>
    </>)
}
export default TaskForm;