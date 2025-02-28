// // TaskContext.jsx
// import { createContext, useContext } from "react";
// import { getTasksQuery } from "../api/tasks";
//
// const TaskContext = createContext();
//
// export const useTaskContext = () => useContext(TaskContext);
//
// export const TaskProvider = ({ children }) => {
//   return (
//     <TaskContext.Provider>
//       {children}
//     </TaskContext.Provider>
//   );
// };