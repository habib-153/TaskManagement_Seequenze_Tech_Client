/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllTasksQuery } from "@/redux/api/todoApi";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import { useState } from "react";
import Navbar from "../ui/Navbar";

type TodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
  deadline: string;
  assignedTo: string;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  const { data: todo, isLoading, isError } = useGetAllTasksQuery(priority);
  const todos = todo?.data;
  return (
    <div>
      <Navbar priority={priority} setPriority={setPriority}/>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
      </div>
      <div className="bg-primary-gradient p-[5px] w-full h-full rounded-xl">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-4">
          {todos ? (
            todos.map((item: TodoCardProps) => (
              <TodoCard key={item.id} {...item} />
            ))
          ) : (
            <div className="bg-white text-2xl font-bold p-5 text-center rounded-2xl">
              <p>There is no task pending</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
