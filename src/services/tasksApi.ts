import axios from "axios";
import type { ToDo, Status, Priority } from "../types";

const API = "http://localhost:4000/api/tasks";

export type ApiTask = {
  Id: number;
  Title: string;
  Description: string;
  Status: string;
  Priority: string;
  DueDate: string | null;
};

export const mapApiTaskToToDo = (task: ApiTask): ToDo => ({
  id: task.Id,
  text: task.Title,
  description: task.Description || "",
  imageUrl: "",
  deadline: task.DueDate ? task.DueDate.split("T")[0] : "",
  completedDate: "",
  status: task.Status as Status,
  priority: task.Priority as Priority,
  favorite: false,
});

export const createTask = async (
  title: string,
  description: string,
  priority: string,
  dueDate: string
) => {
  await axios.post(API, {
    title,
    description,
    status: "idea",
    priority,
    dueDate,
  });
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API}/${id}`);
};

export const updateTask = async (
  id: number,
  title: string,
  description: string,
  priority: string,
  dueDate: string,
  status: string
) => {
  await axios.put(`${API}/${id}`, {
    title,
    description,
    priority,
    dueDate,
    status,
  });
};

export const fetchTasks = async () => {
  const response = await axios.get<ApiTask[]>(API);
  return response.data.map(mapApiTaskToToDo);
};