import React, { useState } from 'react';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskSearch from './components/TaskSearch';
import TasksList from './components/TasksList';
import './App.css'
function App() {
  const [tasks, setTasks] = useState([])
  const handleAddingTask = (task) => {
    setTasks([...tasks, { task, id: tasks.length, isCompleted: false }])
  }

  return (
    <div className="App">
      <TaskForm handleAddingTask={handleAddingTask} />
      <TaskSearch />
      <TasksList tasks={tasks} handleDeletingTask={handleDeletingTask} handleCompletion={handleCompletion} />
      <Footer countTasks={tasks.length} />
    </div>
  );
}

export default App;
