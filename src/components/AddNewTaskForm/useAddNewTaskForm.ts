import { tasksApi } from "@/store/tasksApi";
import { ITask } from "@/types";
import { useRef } from "react";

export function useAddNewTaskForm() {
  const refText = useRef<HTMLInputElement>(null);
  const refCheckbox = useRef<HTMLInputElement>(null);
  const [handleAddTask, { isLoading, isError }] = tasksApi.useAddTaskMutation();

  const handleClick = () => {
    const task: ITask = {
      id: Date.now(),
      text: refText.current?.value || "",
      completed: refCheckbox.current?.checked || false,
    };
    handleAddTask(task);
  };

  return { handleClick, isLoading, isError, refText, refCheckbox };
}
