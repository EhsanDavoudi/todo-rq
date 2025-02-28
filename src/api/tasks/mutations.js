import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createTask, deleteTask, updateTask} from "./endpoints.js";

export const createTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    // onMutate: async (task) => {
    //   // Optimistic update logic goes here
    //
    // },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });
}

export const updateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onSuccess: (task) => {
      queryClient.invalidateQueries(['tasks']);
    }
  })
}

export const deleteTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: (task) => {
      queryClient.invalidateQueries(['tasks']);
    }
  })
}