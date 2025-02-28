import {Box, List, Typography} from "@mui/material";
import {AddButton} from "../components/AddButton.jsx";
import {SelectTasks} from "../components/SelectTasks.jsx";
import {useState} from "react";
import {InputModal} from "../components/InputModal.jsx";
import {TaskItem} from "../components/TaskItem.jsx";
import {getTasksQuery} from "../api/tasks/index.js";

export const Home = () => {
  const {
    data: response,
    isLoading,
    error
  } = getTasksQuery();

  // Extract tasks array with fallback
  const tasksList = response?.data || [];

  const [filterTasks, setFilterTasks] = useState("all");

  // ✅ Handle loading/errors
  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredTasks = (taskFilter) => {
    return tasksList?.filter((task) => {  // ✅ Fallback to empty array
      if (taskFilter === "all") return true;
      if (taskFilter === "completed") return task.is_completed;
      if (taskFilter === "uncompleted") return !task.is_completed;
      return true;
    });
  };

  const tasksToDisplay = filteredTasks(filterTasks);

  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: "#10233E",
          textAlign: "center",
          marginBlock: "2rem"
        }}
      >
        Todo List
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <SelectTasks value={filterTasks} onChange={setFilterTasks} />
          <AddButton />
        </Box>

        <List sx={{ width: '100%', bgcolor: "background.paper" }}>
          {tasksToDisplay
            .sort((a, b) => a.is_completed - b.is_completed)
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task}
              />
            ))
          }
        </List>

        <InputModal />
      </Box>
    </>
  );
};
