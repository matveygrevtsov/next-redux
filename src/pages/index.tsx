import { AddNewTaskForm } from "@/components/AddNewTaskForm/AddNewTaskForm";
import { TasksList } from "@/components/TasksList/TasksList";
import type { NextPage } from "next";

const MainPage: NextPage = () => {
  return (
    <>
      <AddNewTaskForm />
      <TasksList />
    </>
  );
};

export default MainPage;
