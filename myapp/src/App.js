import React from 'react';
import './App.css'

import ToDoList from './components/ToDoList';
import TaskContextProvider from './context/tasksContext';
function App() {
  return (
  <TaskContextProvider>
    <ToDoList />
  </TaskContextProvider>
  )
}

export default App;
