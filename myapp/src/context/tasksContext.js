import { createContext, useState} from "react";


export const tasksContext = createContext(null);



const TaskContextProvider= ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [searchList, setSearchList] = useState([])
    const [isSearching, setIsSearching] = useState(false)
   
    const handleAddingTask = (task) => {
        setTasks([...tasks, { task, id: crypto.randomUUID(), isCompleted: false }])
    }
    const handleDeletingTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        const newSearchTask = searchList.filter(task => task.id !== id)
        setTasks([...newTasks])
        setSearchList([...newSearchTask])
    }
    const handleCompletion = (id) => {

        const newTask = tasks.find(task => { if (task.id === id) task.isCompleted = !task.isCompleted });
        setTasks([...tasks])
    }
    const handleSearch = (searchKey) => {
        const newTask = tasks.filter(task => String(task.task).includes(searchKey))
        setSearchList([...newTask]);
    }

    return <tasksContext.Provider value={{
    tasks: isSearching ? searchList : tasks
      ,handleAddingTask,handleDeletingTask,handleCompletion,handleSearch,isSearching,setIsSearching
    }}>{children}</tasksContext.Provider>
}
export default TaskContextProvider