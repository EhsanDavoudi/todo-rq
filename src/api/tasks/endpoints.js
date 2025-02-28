// endpoints.js
import { apiClient } from "../apiClient";

export const getTasks = async () => {
  try {
    const res = await apiClient.get('/tasks');  // ✅ Use apiClient
    return res.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = (task) => apiClient.post('/tasks', task);
export const updateTask = (task) => apiClient.put(`/tasks/${task.id}`, task);
export const deleteTask = (id) => apiClient.delete(`/tasks/${id}`);