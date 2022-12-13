import React from 'react'
import style from './style.module.css'
const Footer = ({ countTasks }) => {
    return (
        <div className={style.counterContainer}>
            <div className="count-tasks">Tasks {countTasks}</div>
            <div className="completed-tasks">Completed Tasks 0</div>
        </div>)
}
export default Footer;