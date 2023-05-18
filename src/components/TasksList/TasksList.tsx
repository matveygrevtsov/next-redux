import { TaskCard } from "../TaskCard/TaskCard";
import { tasksApi } from "@/store/tasksApi";
import { Preloader } from "../Preloader/Preloader";
import cn from "classnames";

import s from "./TasksList.module.css";

interface Props {
  className?: string;
}

export function TasksList({ className }: Props) {
  const { data, isLoading, isError } = tasksApi.useFetchTasksQuery(3);
  const rootClassName = cn(s.root, className);

  if (data) {
    return (
      <div className={rootClassName}>
        <h2 className={s.title}>Список задач</h2>
        <ul>
          {data.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={rootClassName}>
        <h2 className={s.title}>Список задач</h2>
        <span className={s.error}>
          Произошла ошибка при скачивании. Повторите попытку позже.
        </span>
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <Preloader />
    </div>
  );
}
