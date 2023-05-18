import { useAddNewTaskForm } from "./useAddNewTaskForm";
import { Preloader } from "../Preloader/Preloader";
import cn from "classnames";

import s from "./AddNewTaskForm.module.css";

interface Props {
  className?: string;
}

export function AddNewTaskForm({ className }: Props) {
  const { handleClick, isLoading, isError, refText, refCheckbox } =
    useAddNewTaskForm();
  const rootClassName = cn(s.root, className);

  if (isLoading) {
    return (
      <div className={rootClassName}>
        <h3 className={s.title}>Форма добавления новых тасков</h3>
        <Preloader />
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <h3 className={s.title}>Форма добавления новых тасков</h3>
      <div className={s.row}>
        <input ref={refText} />
        <input ref={refCheckbox} type="checkbox" />
        <button onClick={handleClick} className={s.button}>
          Добавить
        </button>
      </div>
      {isError && (
        <span className={s.error}>
          Произошла ошибка. Повторите попытку позже
        </span>
      )}
    </div>
  );
}
