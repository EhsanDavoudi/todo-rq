import {useQuery} from "@tanstack/react-query";
import {getTasks} from "./endpoints.js";

export const getTasksQuery = () => useQuery({
  queryKey: ['tasks'],
  queryFn: getTasks,
});