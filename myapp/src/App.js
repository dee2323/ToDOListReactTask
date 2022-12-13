import React, { useState } from 'react';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskSearch from './components/TaskSearch';
import TasksList from './components/TasksList';
import './App.css'
function App() {
  const [tasks, setTasks] = useState([])
  const [searchList, setSearchList] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const handleAddingTask = (task) => {
    setTasks([...tasks, { task, id: Math.random() * (new Date()).getTime(), isCompleted: false }])
  }
  const handleDeletingTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks([...newTasks])
  }
  const handleCompletion = (id) => {

    const newTask = tasks.find(task => { if (task.id === id) task.isCompleted = !task.isCompleted });
    setTasks([...tasks])
  }
  const handleSearch = (searchKey) => {
    const newTask = tasks.filter(task => String(task.task).includes(searchKey))
    setSearchList([...newTask]);
  }
  console.log(tasks)
  return (
    <div className="App">
      <TaskForm handleAddingTask={handleAddingTask} />
      <TaskSearch handleSearch={handleSearch} setIsSearching={setIsSearching} />
      <TasksList tasks={isSearching ? searchList : tasks} handleDeletingTask={handleDeletingTask} handleCompletion={handleCompletion} />
      <Footer countTasks={tasks.length} tasks={tasks} />
    </div>
  );
}

export default App;
