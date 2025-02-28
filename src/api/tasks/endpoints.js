import {apiClient} from "../apiClient.js";
import axios from "axios";

export const getTasks = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/tasks');
    return res.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error; // Ensure the error is thrown so React Query can handle it
  }

};
export const createTask = (task) => apiClient.post('/tasks', task);
export const updateTask = (task) => apiClient.put(`/tasks/${task.id}`, task);
export const deleteTask = (id) => apiClient.delete(`/tasks/${id}`);