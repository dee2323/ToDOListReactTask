import React, { useState } from 'react'
import './style.css'
import Footer from '../Footer/index';
import TaskForm from '../TaskForm/index';
import TaskSearch from '../TaskSearch/index';
import TasksList from '../TasksList/index';
const ToDoList = () => {
    // const [tasks, setTasks] = useState([])
    // const [searchList, setSearchList] = useState([])
    // const [isSearching, setIsSearching] = useState(false)
    // const handleAddingTask = (task) => {
    //     setTasks([...tasks, { task, id: crypto.randomUUID(), isCompleted: false }])
    // }
    // const handleDeletingTask = (id) => {
    //     const newTasks = tasks.filter((task) => task.id !== id);
    //     const newSearchTask = searchList.filter(task => task.id !== id)
    //     setTasks([...newTasks])
    //     setSearchList([...newSearchTask])
    // }
    // const handleCompletion = (id) => {

    //     const newTask = tasks.find(task => { if (task.id === id) task.isCompleted = !task.isCompleted });
    //     setTasks([...tasks])
    // }
    // const handleSearch = (searchKey) => {
    //     const newTask = tasks.filter(task => String(task.task).includes(searchKey))
    //     setSearchList([...newTask]);
    // }
    return (
        <div className="App">
            <TaskForm  />
            <TaskSearch  />
            <TasksList  />
            <Footer  /> 
        </div>
    );
}
export default ToDoList;