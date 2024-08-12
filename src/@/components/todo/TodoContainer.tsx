/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllTasksQuery } from "@/redux/api/todoApi";
import TodoCard from "./TodoCard";
import { useAppSelector } from "@/redux/hook";
import {TodoCardProps} from '../../../types'

const TodoContainer = () => {
  const { priority } = useAppSelector((state) => state.filter);

  const { data: todo } = useGetAllTasksQuery(priority);
  const todos = todo?.data;
  return (
    <div>
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
