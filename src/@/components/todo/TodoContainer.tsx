/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllTasksQuery } from "@/redux/api/todoApi";
import TodoCard from "./TodoCard";
import { useAppSelector } from "@/redux/hook";
import { TodoCardProps } from "../../../types";

const TodoContainer = () => {
  const { priority } = useAppSelector((state) => state.filter);

  const tData = {
    title: "Brainstorming",
    assignedTo: "Habu",
    deadline: "19/2/24",
    description:
      "Brainstorming brings team members' diverse experience into play.",
    _id: "1",
    isCompleted: false,
    priority: "low",
  };
  const { data: todo } = useGetAllTasksQuery(priority);
  const todoData = todo?.data;
  return (
    <div>
      <TodoCard {...tData} />
      {/* {todoData ? (
        todoData.map((item: TodoCardProps) => (
          <TodoCard key={item._id}  />
        ))
      ) : (
        <div className="bg-white text-2xl font-bold p-5 text-center rounded-2xl">
          <p>There is no task pending</p>
        </div>
      )} */}
    </div>
  );
};

export default TodoContainer;
