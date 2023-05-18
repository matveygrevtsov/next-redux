import { tasksApi } from "@/store/tasksApi";
import { ITask } from "@/types";

export function useTaskCard(task: ITask) {
  const [removeTask] = tasksApi.useRemoveTaskMutation();
  const [changeTask] = tasksApi.useChangeTaskMutation();

  function handleClickRemove() {
    removeTask(task.id);
  }

  function handleStatusChange() {
    changeTask({ ...task, completed: !task.completed });
  }

  return {
    handleClickRemove,
    handleStatusChange,
  };
}
