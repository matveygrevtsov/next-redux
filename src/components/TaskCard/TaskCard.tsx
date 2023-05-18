import { useTaskCard } from "./useTaskCard";
import { ITask } from "@/types";
import cn from "classnames";

import s from "./TaskCard.module.css";

interface Props {
  className?: string;
  task: ITask;
}

export function TaskCard({ task, className }: Props) {
  const { handleClickRemove, handleStatusChange } = useTaskCard(task);

  return (
    <div className={cn(s.root, className)}>
      <span>{JSON.stringify(task)}</span>
      <input
        type="checkbox"
        onClick={handleStatusChange}
        defaultChecked={task.completed}
      />
      <button onClick={handleClickRemove} className={s.removeButton}>
        Удалить
      </button>
    </div>
  );
}
