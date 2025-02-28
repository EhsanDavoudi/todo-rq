import {createContext, useContext} from "react";
import {getTasksQuery} from "../api/tasks/index.js";

const TaskContext = createContext()

export const useTaskContext = () => useContext(TaskContext)

export const TaskProvider = ({children}) => {
  const { data: tasksList } = getTasksQuery();

  console.log('Data:', tasksList);

  const filteredTasks = (taskFilter) => {
    return tasksList?.filter((task) => {
      if (taskFilter === "all") return true;
      if (taskFilter === "completed") return task.is_completed;
      if (taskFilter === "uncompleted") return !task.is_completed;
      return true;
    })
  }

  const value = {
    filteredTasks,
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}