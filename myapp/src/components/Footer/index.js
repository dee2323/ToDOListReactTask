import React, { useContext } from 'react'
import { tasksContext } from '../../context/tasksContext'
import style from './style.module.css'
const Footer = () => {
   const { tasks }=useContext(tasksContext)
    let counter = 0;
    tasks.length && tasks.map(task => task.isCompleted ? counter++ : '')
    return (
        <div className={style.counterContainer}>
            <div className="count-tasks">Tasks {tasks.length}</div>
            <div className="completed-tasks">Completed Tasks {counter}</div>
        </div>)
}
export default Footer;