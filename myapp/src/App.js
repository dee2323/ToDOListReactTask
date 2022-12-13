import React, { useState } from 'react';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskSearch from './components/TaskSearch';
import TasksList from './components/TasksList';
import './App.css'
function App() {

  return (
    <div className="App">
      <TaskForm />
      <TaskSearch />
      <TasksList />
      <Footer />
    </div>
  );
}

export default App;
