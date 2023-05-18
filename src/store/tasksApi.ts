import { ITask } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// Тэги нужны для того, чтобы показать, после каких методов нужно заново скачать данные с сервера (например, после добавления новой таски, нужно заново скачать список всех тасков).

export const tasksApi = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  tagTypes: ["lol"], // Перечисляем список тегов, чтобы typescript давал подсказки.
  endpoints: (build) => ({
    fetchTasks: build.query<ITask[], number>({
      query: (limit) => ({
        method: "GET",
        url: `/tasks?_limit=${limit}`,
      }),
      providesTags: ["lol"],
    }),
    addTask: build.mutation<ITask, ITask>({
      query: (task) => ({
        method: "POST",
        url: "/tasks",
        body: task,
      }),
      invalidatesTags: ["lol"], // Таким образом мы даём понять, что после addTask нужно выполнить fetchTasks заново.
    }),
    changeTask: build.mutation<ITask, ITask>({
      query: (task) => ({
        method: "PUT",
        url: `/tasks/${task.id}`,
        body: task,
      }),
      invalidatesTags: ["lol"], // Таким образом мы даём понять, что после removeTask нужно выполнить fetchTasks заново.
    }),
    removeTask: build.mutation<ITask, number>({
      query: (taskId) => ({
        method: "DELETE",
        url: `/tasks/${taskId}`,
      }),
      invalidatesTags: ["lol"], // Таким образом мы даём понять, что после removeTask нужно выполнить fetchTasks заново.
    }),
  }),
});
