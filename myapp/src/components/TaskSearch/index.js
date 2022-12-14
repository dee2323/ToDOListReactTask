import React, { useState } from 'react'
import style from './style.module.css'
const TaskSearch = ({ handleSearch, setIsSearching }) => {
    const [input, setInput] = useState('')
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <input type="text" placeholder="search..." className={style.search} id="search" value={input} onChange={(e) => {
        setInput(e.target.value); input && handleSearch(input); input && setIsSearching(true)
    }} />
        {/* <button><i class="fa-solid fa-magnifying-glass" onClick={() => { handleSearch(input); setIsSearching(true) }}></i></button> */}
        <button onClick={() => { setInput(''); setIsSearching(false) }}><i class="fa-solid fa-arrows-rotate"></i></button></div >

}
export default TaskSearch;